'use client'

import {useState} from 'react'
import Navbar from "@/components/navbar"
import Search from '@/components/search_filter_sort/search'
import Sort from '@/components/search_filter_sort/sort'
import Filter from "@/components/search_filter_sort/filter"
import UniversityTile from "@/components/universities_page/university_tile"
import universities_list from "@/utils/example_universities_json/universities_list"

import '../app/globals.css'

export default function Universities() {
    const [display_list, set_display_list] = useState(universities_list)
    const [filter_tags, set_filter_tags] = useState([])
    const applicable_filter_headers= [
        {'checkbox':['approving_bodies']},
        {'slider':['fee']},
    ]
    
    return (
        <>
            <Navbar />
            <div className='flex'>
                <Filter />
                <div>
                    <div>
                        <Search />
                        <Sort />
                    </div>
                    <div>
                        {/* Filter Tags */}
                    </div>
                    <div className='flex flex-col'>
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