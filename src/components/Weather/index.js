import { Fragment } from 'react'

import SunnyLogo from '../../assets/images/sunny.png'
import CloudyLogo from '../../assets/images/cloudy.png'
import RainyLogo from '../../assets/images/rainy.png'
import WeatherCondition from './Condition'
import Forecast from './Forecast'

const WeatherDetails = ({ tempData, isLoading }) => {

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



    return (
        <Fragment>
            {tempData ? (
                <div className='flex flex-col w-10/12 gap-8'>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-bold">{tempData.location.name}</span>
                            <span className="text-[#98A2B3]">Chance of rain</span>
                            <span className="text-5xl mt-10 font-bold">{tempData.current.temp_c}&deg;C</span>
                        </div>
                        <img src={WeatherIcon(tempData.current.condition)} width={180} alt='weather logo' />
                    </div>
                    <Forecast hourlyForcastData={tempData} />
                    <WeatherCondition airCondition={tempData} />
                </div>
            ) : null}
        </Fragment>
    )

}

export default WeatherDetails
