import RainIcon from '../../assets/icon/drop'
import TemperatureIcon from '../../assets/icon/temperature'
import UVIcon from '../../assets/icon/uv'
import WindIcon from '../../assets/icon/wind'


const WeatherCondition = ({ airCondition }) => {

    const conditions = [
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
        <div className="bg-[#EAECEF] rounded-md p-8  mb-5">
            <div className="font-bold text-sm text-[#344054] mb-4">AIR CONDITIONS</div>
            <div className="grid grid-cols-2 mt-8 gap-10">
                {conditions.map((condition, index) => (
                    <div key={index} className="flex gap-1 flex-col justify-center">
                        <div className="flex items-center text-gray-500 text-sm">
                            <condition.Icon stroke="#98A2B3" className="w-8 h-8" />
                            <span className="ml-2 font-medium text-[#98A2B3]">{condition.label}</span>
                        </div>
                        <div className="font-bold text-xl ml-10">{condition.value}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WeatherCondition