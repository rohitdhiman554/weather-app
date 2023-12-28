import WeatherLogo from '../../assets/icon/weather'

const SideBar = () => {
    return (
        <div className='border-2 flex items-center flex-col h-screen bg-[#EAECEF] p-2 rounded-md'>
            <WeatherLogo width={35} height={35} />
            <span className='font-medium text-sm'>
                Weather</span>
        </div>
    )
}

export default SideBar