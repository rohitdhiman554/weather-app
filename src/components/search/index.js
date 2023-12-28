import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <div className='flex p-1 bg-gray-100 border-2 rounded-md'>
                <input placeholder='Search for cities' className='w-full p-1 rounded-md bg-gray-100 focus:outline-none' />
            </div>
        </div>
    )
}

export default SearchBar