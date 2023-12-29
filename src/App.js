import { useState, useEffect } from 'react';

import './App.css';
import SideBar from './components/Sidebar';
import WeatherDetails from './components/Weather';
import WeekForecast from './components/Weather/WeekForecast';
import SearchBar from './components/search';
import { API_KEY } from '../src/utils/constants/index'
import Loader from './components/shared/Loader'
import { DEFAULT_CITY } from '../src/utils/constants/index';


function App() {

  const [search, setSearch] = useState();
  const [tempData, setTempData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search || DEFAULT_CITY}&days=1&aqi=no&alerts=no`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setIsLoading(false)
        setTempData(data);

      } catch (error) {
        console.error("Could not fetch the data", error);
      }
    };

    fetchData();

  }, [search])


  return (
    <div className='flex w-full h-screen p-8 gap-8'>
      <div className='h-full'>
        <SideBar />

      </div>
      <div className='flex flex-col gap-5 w-3/5 ml-8'>
        <SearchBar setSearch={setSearch} />
        <div className='flex justify-center'>
          {!isLoading ? <WeatherDetails tempData={tempData} /> : <Loader />}
        </div>
      </div>
      <div className='w-4/12 mb-5'>
        {!isLoading ? <WeekForecast tempData={tempData} /> : <Loader />}
      </div>
    </div>
  );
}

export default App;
