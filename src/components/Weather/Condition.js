import Temperature from '../../assets/icon/temperature'


const WeatherCondition = () => {
    return (
        <div className='flex flex-col p-5 gap-5 bg-[#EAECEF] rounded-md'>
            <span className='font-bold text-sm text-[#344054]'>AIR CONDITIONS</span>
            <div className='flex px-5 py-2'>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center'>
                        <Temperature width={25} height={25} />
                        <span className='font-semibold  text-gray-500'>Real Feel</span>
                    </div>
                    <span className='font-bold text-xl text-center'>30&deg;</span>
                </div>

            </div>

        </div>
    )
}

export default WeatherCondition