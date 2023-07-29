'use client'

import { useState } from 'react'

const Search = ({ display_list, onSearch }) => {
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

    return (
        <div>
        <h3>Search:</h3>
        <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name, category, etc."
        />
        </div>
    );
}

export default Search