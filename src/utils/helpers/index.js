import SunnyLogo from '../../assets/images/sunny.png'
import CloudyLogo from '../../assets/images/cloudy.png'
import RainyLogo from '../../assets/images/rainy.png'
import { DaysOfWeek } from '../constants';

export const WeatherIcon = (weather) => {
    switch (weather) {
        case 'Sunny':
            return SunnyLogo;
        case 'Cloudy':
            return CloudyLogo;
        case 'Rainy':
            return RainyLogo;
        default:
            return SunnyLogo;
    }
};



export const getWeekday = (dateString) => {
    const days = [DaysOfWeek.SUNDAY, DaysOfWeek.MONDAY, DaysOfWeek.TUESDAY, DaysOfWeek.WEDNESDAY, DaysOfWeek.THURSDAY, DaysOfWeek.FRIDAY, DaysOfWeek.SATURDAY];
    const date = new Date(dateString);
    return days[date.getDay()];
};