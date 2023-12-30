import { Fragment } from "react";
import { WeatherIcon } from "../../utils/helpers";

import WeatherCondition from "./Condition";
import Forecast from "./Forecast";

const WeatherDetails = ({ tempData }) => {
    return (
        <Fragment>
            {tempData ? (
                <div className="flex flex-col gap-8 md:mx-4 mx-0">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <span className="md:text-5xl text-3xl md:w-full w-48 break-words font-bold">
                                {tempData.location.name}
                            </span>
                            <span className="text-primary md:text-lg text-md">
                                {tempData.current.condition.text}
                            </span>
                            <span className="md:text-5xl text-3xl mt-10 font-bold">
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
