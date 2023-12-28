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
        <div className="bg-[#EAECEF] rounded-md p-5 mb-5">
            <div className="font-bold text-sm text-[#344054] mb-4">AIR CONDITIONS</div>
            <div className="grid grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                    <div key={index} className="flex gap-1 flex-col items-center justify-center">
                        <div className="flex items-center text-gray-500 text-sm">
                            <condition.Icon className="w-6 h-6" />
                            <span className="ml-2">{condition.label}</span>
                        </div>
                        <div className="font-bold text-xl">{condition.value}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WeatherCondition