import SunnyLogo from '../../assets/images/sunny.png'
import CloudyLogo from '../../assets/images/cloudy.png'
import RainyLogo from '../../assets/images/rainy.png'

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