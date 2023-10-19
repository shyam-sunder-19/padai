'use client'

import { useState } from 'react'
import Fuse from 'fuse.js'

const Search = ({ search_keys, display_list, onSearch }) => {
    const [search_used, set_search_used] = useState(false)
    const [search_results, set_search_results] = useState(display_list)
    const fuse = new Fuse(
        display_list,
        {
            keys:search_keys,
            threshold:0.2
        }
    )
    const search_with_fuse = () => {
        const query = document.getElementById('search_json').value
        console.log(query.length)
        if(query.length){
            set_search_used(true)
            set_search_results(fuse.search(query).map((result) => result.item))
            onSearch(fuse.search(query).map((result) => result.item))
        } else {
            set_search_used(false)
            onSearch(display_list)
        }
    }
    /*
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const filtered_list = display_list.filter((el) =>
        Object.values(el).some((value) => {
            if (typeof value === 'string') {
            return value.toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        })
    );
    // Pass the filtered courses back to the parent component using the callback
    onSearch(filtered_list);
    */
    return (
        <div className='ml-4 mt-3 flex items-center justify-between'>
            <div className="border rounded-full flex items-center rounded-full bg-transparent justify-center">
                <button 
                    className="mr-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2"
                    onClick={search_with_fuse}
                >
                    search...
                </button>
                <input
                    className="max-w-s py-2 px-4 rounded-full bg-transparent outline-none"
                    id = "search_json"
                    placeholder="among 50 universities"
                />
            </div>
            <div className='mx-4 font-light'>
                {
                    search_used?
                    <div>Showing <b>{search_results.length}</b> results for &ldquo;<b>{document.getElementById("search_json").value}</b>&rdquo;</div>
                    :<div>Showing <b>{display_list.length}</b> results</div>
                }
            </div>
        </div>
    );
}

export default Search