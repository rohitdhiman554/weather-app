import { WeatherIcon } from "../../utils/helpers";
import { getFormattedTime } from "../../utils/helpers";

const Forecast = ({ hourlyForcastData }) => {
    const dataAtIntervals = hourlyForcastData.forecast.forecastday[0].hour.filter(
        (_, index) => index % 4 === 0
    );

    return (
        <div className="flex flex-col p-5 bg-tertiary bg-opacity-40 rounded-md">
            <span className="font-bold text-sm text-secondary">TODAY'S FORECAST</span>
            <div className="flex gap-4 max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-none scroll-container overflow-x-auto py-4">
                {dataAtIntervals.map((temp) => {
                    return (
                        <div className="flex flex-col w-full items-center min-w-max px-6 border-2 py-4 gap-2 shadow-md rounded-md">
                            <span className="font-semibold text-primary">
                                {getFormattedTime(temp.time)}
                            </span>
                            <img
                                src={WeatherIcon(temp.condition.text)}
                                width={60}
                                alt="sunlogo"
                            />
                            <span className="font-bold text-lg">{temp.temp_c}&deg;C</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;
