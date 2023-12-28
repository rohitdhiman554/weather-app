import SunLogo from '../../assets/images/sun.png'
import Forecast from './Forecast'

const WeatherDetails = () => {
    return (
        <div className='flex flex-col w-10/12 gap-8'>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <span className="text-5xl font-bold">Madrid</span>
                    <span className="text-[#98A2B3]">Chance of rain</span>
                    <span className="text-5xl mt-10 font-bold">31&deg;C</span>
                </div>
                <div>
                    <img src={SunLogo} width={180} alt='sunlogo' />
                </div>
            </div>
            <Forecast />
        </div>
    )
}

export default WeatherDetails