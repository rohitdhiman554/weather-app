import WeatherLogo from '../../assets/icon/weather'

const SideBar = () => {
    return (
        <div className='flex h-[820px] mb-5  items-center flex-col bg-[#EAECEF] p-2 rounded-md'>
            <WeatherLogo width={35} height={35} />
            <span className='font-medium text-sm'>
                Weather</span>
        </div>
    )
}

export default SideBar