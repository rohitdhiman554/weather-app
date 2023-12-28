import SunLogo from '../../assets/images/sun.png'
const WeatherDetails = () => {
    return (
        <div className='flex flex-col w-10/12 gap-8'>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <span className="text-5xl font-bold">Madrid</span>
                    <span className="text-[#a5bbd8]">Chance of rain</span>
                    <span className="text-5xl mt-10 font-bold">31&deg;C</span>
                </div>
                <div>
                    <img src={SunLogo} width={180} height={150} alt='sunlogo' />
                </div>
            </div>
            <div className='flex flex-col p-5 bg-[#EAECEF] rounded-md'>

                <span className='font-semibold text-sm'>TODAY'S FORECAST</span>
            </div>
        </div>
    )
}

export default WeatherDetails