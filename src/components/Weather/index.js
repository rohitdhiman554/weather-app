import { useEffect, useState, Fragment } from 'react'

import SunnyLogo from '../../assets/images/sunny.png'
import CloudyLogo from '../../assets/images/cloudy.png'
import RainyLogo from '../../assets/images/rainy.png'
import WeatherCondition from './Condition'
import Forecast from './Forecast'
import { API_KEY } from '../../utils/constants'

const WeatherDetails = () => {
    const [tempData, setTempData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=1&aqi=no&alerts=no`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setTempData(data);
            } catch (error) {
                console.error("Could not fetch the data", error);
            }
        };

        fetchData();
    }, []);

    console.log(">", tempData);
    const WeatherIcon = (weather) => {
        switch (weather) {
            case 'Sunny':
                return SunnyLogo;
            case 'Cloudy':
                return CloudyLogo;
            case 'Rainy':
                return RainyLogo;
            default:
                return SunnyLogo;
        }
    };

    console.log("temp", tempData);

    return (
        <Fragment>
            {
                tempData ?
                    <div className='flex flex-col w-10/12 gap-8'>
                        < div className="flex justify-between items-center" >
                            <div className="flex flex-col gap-2">
                                <span className="text-5xl font-bold">{tempData.location.name}</span>
                                <span className="text-[#98A2B3]">Chance of rain</span>
                                <span className="text-5xl mt-10 font-bold">{tempData.current.temp_c}&deg;C</span>
                            </div>
                            <img src={WeatherIcon(tempData.current.condition)} width={180} alt='weather logo' />
                        </div >
                        <Forecast hourlyForcastData={tempData} />
                        <WeatherCondition />
                    </div >
                    : null}
        </Fragment>
    )
}

export default WeatherDetails
