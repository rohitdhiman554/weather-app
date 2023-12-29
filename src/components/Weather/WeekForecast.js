import React from 'react';
import { WeatherIcon, getWeekday } from '../../utils/helpers';

const WeekForecast = ({ daysForecast }) => {


    return (
        <div className="p-5  rounded-md shadow border-2">
            <div className="text-lg font-bold mb-4 text-[#98A2B3]">FUTURE FORECAST</div>
            {daysForecast.map((forecast, index) => (
                <div key={index} className="grid grid-cols-5 items-center justify-center px-5 py-7 border-b-2">
                    <div className="font-medium text-[#98A2B3]">{getWeekday(forecast.date)}</div>
                    <div className='grid grid-cols-5 max-w-56 w-full mx-auto col-span-3 items-center'>
                        <div className='col-span-3'>
                            <img src={WeatherIcon(forecast.day.condition.text)} width={100} alt='weather logo' />
                        </div>
                        <p className='font-medium col-span-2'>{forecast.day.condition.text}</p>
                    </div>
                    <div className='font-medium text-right'>
                        <span>{forecast.day.maxtemp_c}°/ </span>
                        <span className='text-[#98A2B3]'>{forecast.day.mintemp_c}°</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WeekForecast;
