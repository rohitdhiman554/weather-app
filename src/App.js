import React, { useState, useEffect } from 'react';

import './App.css';
import SideBar from './components/Sidebar';
import WeatherDetails from './components/Weather';
import WeekForecast from './components/Weather/WeekForecast';
import SearchBar from './components/Search';
import Loader from './components/shared/Loader';
import ErrorPage from './components/Error';
import { API_KEY, DEFAULT_CITY, ERROR_MESSAGE } from './utils/constants/constants';

function App() {
  const [search, setSearch] = useState();
  const [tempData, setTempData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('lastSearchedCityWeather');
    if (savedData) {
      const { city, data } = JSON.parse(savedData);
      setSearch(city);
      setTempData(data);
    } else {
      fetchData(); // Fetch data if no saved data is found
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (search) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const query = search || DEFAULT_CITY;
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=no&alerts=no`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTempData(data);

      // Save to local storage
      localStorage.setItem('lastSearchedCityWeather', JSON.stringify({ city: query, data }));
    } catch (error) {
      console.error("Could not fetch the data", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex w-full max-w-7xl justify-center lg:justify-normal mx-auto h-full gap-8'>
      <div className='h-full hidden md:flex py-4 top-0 lg:fixed'>
        <SideBar />
      </div>
      <div className='flex w-11/12 pl-28 h-full py-4 gap-8'>
        <div className='w-5/6 flex flex-col gap-4'>
          <SearchBar setSearch={setSearch} />
          <div className='justify-center items-center h-[790px]'>
            {isError ? (
              <ErrorPage errorMessage={ERROR_MESSAGE} />
            ) : isLoading ? (
              <div className='flex justify-center items-center'>
                <Loader size='large' />
              </div>
            ) : (
              <WeatherDetails tempData={tempData} />
            )}
          </div>
        </div>
        <div className='lg:relative flex'>
          <div className='lg:fixed lg:top-4 pb-10'>
            {!isLoading && !isError && tempData?.forecast?.forecastday ? (
              <WeekForecast daysForecast={tempData.forecast.forecastday} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
