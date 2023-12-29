import SunnyLogo from '../../assets/images/sunny.png'
import CloudyLogo from '../../assets/images/cloudy.png'
import RainyLogo from '../../assets/images/rainy.png'
import WindLogo from '../../assets/images/wind.png'
import SnowLogo from '../../assets/images/snow.png'
import { DaysOfWeek, WeatherType } from '../constants/constants';

export const WeatherIcon = (weatherDescription) => {
    const lowerCaseWeather = weatherDescription.toLowerCase();

    if (lowerCaseWeather.includes(WeatherType.SUNNY)) {
        return SunnyLogo;
    } else if (lowerCaseWeather.includes(WeatherType.CLOUDY)) {
        return CloudyLogo;
    } else if (lowerCaseWeather.includes(WeatherType.RAIN)) {
        return RainyLogo;
    } else if (lowerCaseWeather.includes(WeatherType.WIND)) {
        return WindLogo;
    } else if (lowerCaseWeather.includes(WeatherType.SNOW)) {
        return SnowLogo;
    } else if (lowerCaseWeather.includes(WeatherType.CLOUDY)) {
        return CloudyLogo;
    } else if (lowerCaseWeather.includes(WeatherType.SnowLogo)) {
        return SnowLogo;
    } else {
        return SunnyLogo;
    }
};

export const getWeekday = (dateString) => {
    const days = [DaysOfWeek.SUNDAY, DaysOfWeek.MONDAY, DaysOfWeek.TUESDAY, DaysOfWeek.WEDNESDAY, DaysOfWeek.THURSDAY, DaysOfWeek.FRIDAY, DaysOfWeek.SATURDAY];
    const date = new Date(dateString);
    return days[date.getDay()];
};