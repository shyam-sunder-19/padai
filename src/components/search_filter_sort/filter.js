'use client'

import {useState, useRef} from 'react';
import RangeSlider from './range_slider';
import user_friendly_lang from '@/utils/user_friendly_lang';

const Filter = ({checkbox_filter_hierarchy, slider_ranges, display_list, onFilter}) => {
    const [applied_filters, set_applied_filters] = useState([])
    //const [applied_filter_headers, set_applied_filter_headers] = useState([])
    const [filtered_list, set_filtered_list] = useState(display_list)
    const checkboxes_ref = useRef([])

    /*const filter_algo = (afh) => {
        set_filtered_list(display_list)
        if(afh.length > 0){
            afh.forEach(
                header_el => {
                    let new_filtered_list = [...filtered_list]
                    new_filtered_list = new_filtered_list.filter((item) => {
                        return item[Object.keys(header_el)[0]].includes(header_el[Object.keys(header_el)[0]])
                    })
                    set_filtered_list(new_filtered_list)
                    onFilter(new_filtered_list)
                    console.log(new_filtered_list)
                }
            )
        } else {       
            set_filtered_list(display_list)
        }
        /*
        let new_filtered_list = [...filtered_list]
        new_filtered_list = new_filtered_list.filter((item) => {
            return item[header].includes(el)
        })
        set_filtered_list(new_filtered_list)
        onFilter(new_filtered_list)
        console.log(new_filtered_list)
        */

    /*
    const [applicableFilters, setApplicableFilters] = useState([])
    const [appliedFilters, setAppliedFilters] = useState([])

    props.applicable_filter_headers.foreach(
        type => {
            (Object.keys(type)[0] == 'checkbox')?
                <div className='flex flex-col m-2 border rounded-full'>
                    <h>Filter on {Object.keys(type)[0]}</h>
                    {
                        type['checkbox'].foreach(
                            checkbox_filter_type => (
                                <label>
                                    <input type="checkbox" name={Object.keys(type)[0]} value={checkbox_filter_type} /> {checkbox_filter_type}
                                </label>
                            )
                        )
                    }
                </div>:{

                }
        }
    )
    
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setSelectedFilters([...selectedFilters, value]);
      } else {
        setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
      }
    };
  
    const filteredCourses = display_list.filter((el) =>
      selectedFilters.includes(el.category)
    );
  
    // Pass the filtered courses back to the parent component using the callback
    onFilter(filteredCourses);
    */
    return(
        <div className='flex flex-col w-2/12 py-2 px-4 bg-blue-50 h-full rounded'>
            <button 
                className="w-40 my-4 rounded-full text-white bg-blue-500 hover:bg-blue-700 hover:text-white px-4 py-2"
                onClick={() => {
                    set_applied_filters([])
                    set_filtered_list(display_list)
                    onFilter(display_list)
                    checkboxes_ref.current.forEach((checkbox)=>{
                        if(checkbox){
                            checkbox.checked = false
                        }
                    })
                }}
            >
                clear all filters
            </button>
            <div className='flex flex-wrap p-2 align-center'>
                {
                    applied_filters.map(
                        (filter, index) => {
                            return(
                                <div className='rounded bg-blue-300 flex p-1 mr-1 mb-1'>
                                    <p className='border-r-1 mr-1'>{filter}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
            {
                Object.keys(checkbox_filter_hierarchy).map(
                    (header) => {
                        return(
                            <div className='border rounded p-4 mb-4'> 
                                <b>{user_friendly_lang[header]}</b>
                                <div className='flex flex-col'>
                                    {
                                        checkbox_filter_hierarchy[header].map(
                                            (el) => (
                                                <label>
                                                    <input 
                                                        ref={el=>checkboxes_ref.current.push(el)}
                                                        type="checkbox"
                                                        onChange={() => {
                                                            const new_applied_filters = [...applied_filters]
                                                            const index = new_applied_filters.indexOf(el)
                                                            if(index >= 0){
                                                                new_applied_filters.splice(index, 1)
                                                                set_applied_filters(new_applied_filters)
                                                            } else {
                                                                new_applied_filters.push(el)
                                                                set_applied_filters(new_applied_filters)
                                                            }
                                                            let new_filtered_list = [...filtered_list]
                                                            new_filtered_list = new_filtered_list.filter((item) => {
                                                                return item[header].includes(el)
                                                            })
                                                            set_filtered_list(new_filtered_list)
                                                            onFilter(new_filtered_list)
                                                            console.log(new_filtered_list)
                                                        }}
                                                    /> {el}
                                                </label>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
            {
                Object.keys(slider_ranges).map(
                    header => (
                        <div className='border rounded p-4 mb-4'> 
                            <b>{user_friendly_lang[header]}</b>
                            <div className='flex flex-col'>
                                <RangeSlider
                                    min={slider_ranges[header]['min']}
                                    max={slider_ranges[header]['max']}
                                />
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Filter