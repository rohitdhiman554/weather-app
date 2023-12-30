import React, { useRef } from 'react';
import Search from "../../assets/icon/search";
import WeatherLogo from "../../assets/icon/weather";
import Loader from "../shared/Loader";

const SearchBar = ({ setSearch, isLoading }) => {
    const searchInputRef = useRef(null);


    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.target.blur();
            setSearch(searchInputRef.current.value);
        }
    };

    const handleSearch = () => {
        if (searchInputRef.current) {
            setSearch(searchInputRef.current.value);
        }
    };

    return (
        <div className="md:grid md:grid-cols-3 flex py-4 items-center justify-between">
            <div>
                <WeatherLogo width={48} height={48} />
            </div>
            <div className="flex w-72 md:w-96">
                <div className="p-1 flex items-center bg-gray-100 w-full border-2 rounded-md">
                    <input
                        ref={searchInputRef}
                        onKeyDown={handleKeyDown}
                        placeholder="Search for cities"
                        className="w-full p-1 rounded-md bg-gray-100 focus:outline-none"
                    />
                    <div className="w-10 flex items-center justify-center">
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <div className="cursor-pointer" onClick={handleSearch}>
                                <Search />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
