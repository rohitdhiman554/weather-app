import WeatherLogo from '../../assets/icon/weather'

const SideBar = () => {
    return (
        <div className='flex h-[865px] mb-5  items-center flex-col bg-[#EAECEF] px-4 py-8 rounded-md'>
            <WeatherLogo width={24} height={24} />
            <span className='font-medium text-sm'>
                Weather</span>
        </div>
    )
}

export default SideBar