import SunLogo from '../../assets/images/sun.png'

const Forecast = () => {
    return (
        <div className='flex flex-col p-5 gap-5 bg-[#EAECEF] rounded-md'>
            <span className='font-bold text-sm'>TODAY'S FORECAST</span>
            <div className='flex gap-5 w-full'>
                <div className='flex flex-col items-center px-8 py-4 gap-2 shadow-lg rounded-md'>
                    <span className='font-semibold'>6:00 AM</span>
                    <img src={SunLogo} width={60} alt='sunlogo' />
                    <span className='font-bold text-lg'>25&deg;</span>
                </div>


            </div>
        </div>
    )
}

export default Forecast