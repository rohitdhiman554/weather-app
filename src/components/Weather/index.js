import { Fragment } from "react";
import { WeatherIcon } from "../../utils/helpers";

import WeatherCondition from "./Condition";
import Forecast from "./Forecast";

const WeatherDetails = ({ tempData }) => {
    return (
        <Fragment>
            {tempData ? (
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl md:w-full w-48 break-words font-bold">
                                {tempData.location.name}
                            </span>
                            <span className="text-primary text-lg">
                                {tempData.current.condition.text}
                            </span>
                            <span className="text-5xl mt-10 font-bold">
                                {tempData.current.temp_c}&deg;C
                            </span>
                        </div>
                        <img
                            src={WeatherIcon(tempData.current.condition.text)}
                            width={180}
                            alt="weather logo"
                        />
                    </div>
                    <Forecast hourlyForcastData={tempData} />
                    <WeatherCondition airCondition={tempData} />
                </div>
            ) : null}
        </Fragment>
    );
};

export default WeatherDetails;
