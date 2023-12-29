
const SearchBar = ({ setSearch }) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.target.blur();
            setSearch(event.target.value);

        }
    }
    return (
        <div className='flex p-1 bg-gray-100 border-2 rounded-md'>
            <input onKeyDown={handleKeyDown} placeholder='Search for cities' className='w-full p-1 rounded-md bg-gray-100 focus:outline-none' />
        </div>
    )
}

export default SearchBar