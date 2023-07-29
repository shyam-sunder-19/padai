'use client'

import {useState} from 'react';
import RangeSlider from './range_slider';
import user_friendly_lang from '@/utils/user_friendly_lang';

const Filter = ({checkbox_filter_hierarchy, slider_ranges, display_list, onFilter}) => {
    const [appliedFilters, setAppliedFilters] = useState([])
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
        <div className='flex flex-col w-2/12 ml-10'>
            <button className="w-44 my-2 rounded-full text-white bg-blue-500 hover:bg-blue-700 hover:text-white px-4 py-2 ">
                clear all filters
            </button>
            {
                Object.keys(checkbox_filter_hierarchy).map(
                    header => (
                        <div className='border rounded p-2 mb-2'> 
                            <h><b>Filter</b> on {user_friendly_lang[header]}</h>
                            <div className='flex flex-col'>
                                {
                                    checkbox_filter_hierarchy[header].map(
                                        el => (
                                            <label>
                                                <input type="checkbox" /> {el}
                                            </label>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    )
                )
            }
            {
                Object.keys(slider_ranges).map(
                    header => (
                        <div className='border rounded p-2 mb-2'> 
                            <h><b>Filter</b> on {user_friendly_lang[header]}</h>
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