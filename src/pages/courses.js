'use client'

import { useState } from "react"
import Navbar from "@/components/navbar"
import Search from '@/components/search_filter_sort/search'
import Sort from '@/components/search_filter_sort/sort'
import Filter from "@/components/search_filter_sort/filter"
import CourseTile from "@/components/courses_page/course_tile"
import courses_list from "@/utils/example_courses_json/courses_list"

import '../app/globals.css'

export default function Courses() {
    const [filteredCourses, setFilteredCourses] = useState(courses_list);
    const courses_search_keys = ["university_name", "name", "type", "specialization", "approving_bodies"]
    const sort_params = ["fee", "term_in_years"]
    const onSearch = (res) => {
        setFilteredCourses(res)
    }
    const onFilter = (res) => {
        setFilteredCourses(res)
    }
    const applicable_filter_headers = {
            'checkbox':['approving_bodies', 'type', 'specialization'],
            'slider':['fee', 'term_in_years'],
    }
    const checkbox_filter_hierarchy = {}
    const slider_ranges = {}
    applicable_filter_headers['checkbox'].forEach(
        header => {
            checkbox_filter_hierarchy[header] = []
            courses_list.forEach(
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
            let min = courses_list[0][header]
            let max = 0
            courses_list.forEach(
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

    /*
    const [display_list, set_display_list] = useState(courses_list)
    
    const [filter_tags, set_filter_tags] = useState([])
    
    

    const handleSearch = (filteredCourses) => {
        setFilteredCourses(filteredCourses);
    };
    const handleFilter = (filteredCourses) => {
        setFilteredCourses(filteredCourses);
      };
    */
    /*
    
    const filter_display_list = (filtered_list) => {
        set_display_list(filtered_list)
    }
    const get_applied_filters = (filters_applied) => {
        set_filter_tags(filters_applied)
    }
    */
    return (
        <>
            <Navbar />
            <div className="flex justify-center w-screen mt-4">
                <Filter
                    checkbox_filter_hierarchy={checkbox_filter_hierarchy}
                    slider_ranges={slider_ranges}
                    display_list={courses_list}
                    onFilter={onFilter}
                />
                {/*<Filter
                    display_list = {courses_list}
                    onFilter = {handleFilter}
                />
                {
                    /*
                        <Filter 
                            display_list={display_list}
                            filter_display_list={filter_display_list}
                            get_applied_filters={get_applied_filters}
                            applicable_filter_headers={applicable_filter_headers}
                        />
                    */
                }
                
                
                <div>
                    <div className="flex justify-between items-center">
                        <Search
                            search_keys={courses_search_keys}
                            display_list={courses_list}
                            onSearch={onSearch}
                        />
                        <Sort />
                    </div>
                    <div className="flex">
                        {/*
                            filter_tags.map(
                                filter_tag => <div>{filter_tag}</div>
                            )
                            */}
                    </div>
                    <div className="flex flex-col w-11/12">
                        {
                            filteredCourses.map(
                                course_data => (
                                    <CourseTile key={course_data.id} course_data={course_data} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}