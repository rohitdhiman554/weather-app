import React from "react";
import { WeatherIcon, getWeekday } from "../../utils/helpers";

const WeekForecast = ({ daysForecast }) => {
    return (
        <div className="px-5 pt-5 rounded-md shadow border-2">
            <div className="text-lg font-bold mb-4 text-primary lg:text-left text-center">
                FUTURE FORECAST
            </div>
            <div className="md:overflow-y-auto scroll-container md:max-h-[70vh]">
                {daysForecast.map((forecast, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:grid lg:grid-cols-5 items-center justify-center px-5 py-7 border-t"
                    >
                        <div className="font-medium text-primary">
                            {getWeekday(forecast.date)}
                        </div>
                        <div className="flex flex-col lg:grid lg:grid-cols-5 max-w-56 w-full mx-auto col-span-3 items-center">
                            <div className="col-span-3 flex justify-center">
                                <div className="xl:w-auto xl:h-auto w-20 h-20">
                                    <img
                                        src={WeatherIcon(forecast.day.condition.text)}
                                        width={80}
                                        alt="weather logo"
                                    />
                                </div>
                            </div>
                            <p className="font-medium text-center col-span-2">
                                {forecast.day.condition.text}
                            </p>
                        </div>
                        <div className="font-medium text-right">
                            <span>{forecast.day.maxtemp_c}°/ </span>
                            <span className="text-primary">{forecast.day.mintemp_c}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeekForecast;
