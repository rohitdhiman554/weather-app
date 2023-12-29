import RainIcon from '../../assets/icon/drop'
import TemperatureIcon from '../../assets/icon/temperature'
import UVIcon from '../../assets/icon/uv'
import WindIcon from '../../assets/icon/wind'
import { ACTIVE_ICON_COLOR } from '../../utils/constants/colorConstants'


const WeatherCondition = ({ airCondition }) => {

    const weatherMetrics = [
        {
            Icon: TemperatureIcon,
            label: 'Real Feel',
            value: `${airCondition.current.feelslike_c}°`,
        },
        {
            Icon: WindIcon,
            label: 'Wind',
            value: `${airCondition.current.wind_kph} kph`,
        },
        {
            Icon: RainIcon,
            label: 'Humidity',
            value: `${airCondition.current.humidity}%`
        },
        {
            Icon: UVIcon,
            label: 'UV Index',
            value: airCondition.current.uv,
        },
    ];

    return (
        <div className="bg-tertiary rounded-md p-8  mb-5">
            <div className="font-bold text-sm text-secondary mb-4">AIR weatherMetrics </div>
            <div className="grid grid-cols-2 mt-8 gap-10">
                {weatherMetrics.map((weather, index) => (
                    <div key={index} className="flex gap-1 flex-col justify-center">
                        <div className="flex gap-2 items-center text-gray-500 text-sm">
                            <weather.Icon stroke={ACTIVE_ICON_COLOR} className="w-8 h-10" />
                            <span className="font-medium text-lg text-primary">{weather.label}</span>
                        </div>
                        <div className="font-bold text-3xl ml-10">{weather.value}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WeatherCondition