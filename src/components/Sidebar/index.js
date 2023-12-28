import WeatherLogo from '../../assets/icon/weather'

const SideBar = () => {
    return (
        <div className='border-2 h-full bg-slate-100 border-black p-2 rounded-md'>
            <WeatherLogo width={30} height={40} />
        </div>
    )
}

export default SideBar