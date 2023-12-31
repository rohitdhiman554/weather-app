import { useState, useEffect } from "react";
import clsx from "clsx";

import "./App.css";
import WeatherDetails from "./components/Weather";
import WeekForecast from "./components/Weather/WeekForecast";
import Loader from "./components/shared/Loader";
import ErrorPage from "./components/Error";
import SearchBar from './components/Searchbar';
import {
  API_KEY,
  DEFAULT_CITY,
  ERROR_MESSAGE,
  WEATHER_BASE_URL,
  LAST_SEARCHED_CITY
} from "./utils/constants/constants";

function App() {
  const [search, setSearch] = useState(DEFAULT_CITY);
  const [tempData, setTempData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const savedData = localStorage.getItem(LAST_SEARCHED_CITY);
        if (savedData) {
          const { city, data } = JSON.parse(savedData);
          setSearch(city);
          setTempData(data);
        } else {
          setSearch(DEFAULT_CITY);
          await fetchData(DEFAULT_CITY);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialData();

  }, []);

  useEffect(() => {

    fetchData(search);
  }, [search]);

  const fetchData = async (city) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`${WEATHER_BASE_URL}?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`);

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setTempData(data);
      localStorage.setItem(
        LAST_SEARCHED_CITY,
        JSON.stringify({ city, data })
      );
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-between lg:justify-normal mx-auto h-full gap-4">
      <div className="fixed w-full border-b bg-white">
        <div className="max-w-7xl px-6 mx-auto">
          <SearchBar setSearch={setSearch} isLoading={isLoading} />
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row w-full max-w-7xl px-5 mx-auto h-full gap-5 mt-24">
        <div className={clsx(!isError ? "md:overflow-y-auto scroll-container overflow-x-hidden md:h-[85vh]" : null)}>
          {isError ? (
            <ErrorPage errorMessage={ERROR_MESSAGE} />
          ) : isLoading ? (
            <div className="flex justify-center mt-5">
              <Loader size="large" />
            </div>
          ) : (
            <WeatherDetails tempData={tempData} />
          )}
        </div>
        {!isError && !isLoading && tempData?.forecast?.forecastday ? <div className="pb-10 md:pb-0 md:w-5/12 w-full">
          <WeekForecast daysForecast={tempData.forecast.forecastday} />
        </div> : null
        }
      </div>
    </div>
  );
}

export default App;
