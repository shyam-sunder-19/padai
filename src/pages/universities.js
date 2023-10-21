'use client'

import CSVReader from 'csv-reader'
import {useState, useEffect} from 'react'
import Navbar from "@/components/navbar"
import Search from '@/components/search_filter_sort/search'
import Sort from '@/components/search_filter_sort/sort'
import Filter from "@/components/search_filter_sort/filter"
import UniversityTile from "@/components/universities_page/university_tile"
import universities_list from "@/utils/example_universities_json/universities_list"
import FloatingButton from '@/components/FloatingButton'

import university_data from '@/data/university_data'

import '../app/globals.css'

export default function Universities() {
    const [display_list, set_display_list] = useState(university_data)

    const [data, setData] = useState([]);

    const universities_search_keys = ["name"]
    const sort_params = ["fee", "term_in_years"]
    const onSearch = (res) => {
        set_display_list(res)
    }
    const onFilter = (res) => {
        set_display_list(res)
    }
    const applicable_filter_headers= {
        'checkbox':['approving_bodies'],
        'slider':['fee'],
    }

    const checkbox_filter_hierarchy = {}
    const slider_ranges = {}
    applicable_filter_headers['checkbox'].forEach(
        header => {
            checkbox_filter_hierarchy[header] = []
            universities_list.forEach(
                course => {
                    course[header].forEach(
                        val => {
                            if(!checkbox_filter_hierarchy[header].includes(val)){
                                checkbox_filter_hierarchy[header].push(val)
                            }
                        }
                    )
                }
            )
        }
    )
    applicable_filter_headers['slider'].forEach(
        header => {
            slider_ranges[header] = {}
            let min = universities_list[0][header]
            let max = 0
            universities_list.forEach(
                course => {
                    if(course[header] > max) {
                        max = course[header]
                    }
                    if(course[header] < min) {
                        min = course[header]
                    }
                }
            )
            slider_ranges[header]['min'] = min
            slider_ranges[header]['max'] = max
        }
    )
    console.log(checkbox_filter_hierarchy)
    console.log(slider_ranges)

    return (
        <>
            <FloatingButton />
            <Navbar />
            <div className='flex justify-center w-screen mt-4'>
                <Filter 
                    checkbox_filter_hierarchy={checkbox_filter_hierarchy}
                    slider_ranges={slider_ranges}
                    display_list={university_data}
                    onFilter={onFilter}
                />
                <div>
                    <div className="flex justify-between items-center">
                        <Search 
                            search_keys={universities_search_keys}
                            display_list={university_data}
                            onSearch={onSearch}
                        />
                        <Sort />
                    </div>
                    <div>
                        {/* Filter Tags */}
                    </div>
                    <div className="flex flex-col w-11/12">
                        {
                            display_list.map(
                                university_data => (
                                    <UniversityTile key={university_data.id} university_data={university_data} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}