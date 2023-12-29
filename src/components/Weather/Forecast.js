import { WeatherIcon } from '../../utils/helpers'


const Forecast = ({ hourlyForcastData }) => {
    const dataAtIntervals = hourlyForcastData.forecast.forecastday[0].hour.filter((_, index) => index % 4 === 0);

    const formatTime = (time24h) => {
        const [datePart, timePart] = time24h.split(' ');
        const timeString = `${datePart}T${timePart}:00`;
        const date = new Date(timeString);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    };

    return (
        <div className='flex flex-col p-5 gap-5 bg-[#EAECEF] rounded-md'>
            <span className='font-bold text-sm text-[#344054]'>TODAY'S FORECAST</span>
            <div className='flex gap-5'>
                {dataAtIntervals.map((temp) => {
                    return (
                        <div className='flex flex-col w-full items-center border-2 py-4 gap-2 shadow-lg rounded-md'>
                            <span className='font-semibold text-[#98A2B3]'>{formatTime(temp.time)}</span>
                            <img src={WeatherIcon(temp.condition.text)} width={60} alt='sunlogo' />
                            <span className='font-bold text-lg'>{temp.temp_c}&deg;C</span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Forecast