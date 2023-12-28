
const WeekForecast = () => {
    const weekForecast = [
        { day: 'Today', weather: 'Sunny', high: 36, low: 22 },
        { day: 'Tue', weather: 'Sunny', high: 37, low: 21 },
        { day: 'Wed', weather: 'Sunny', high: 37, low: 21 },
        { day: 'Thu', weather: 'Cloudy', high: 37, low: 21 },
        { day: 'Fri', weather: 'Cloudy', high: 37, low: 21 },
        { day: 'Sat', weather: 'Rainy', high: 37, low: 21 },
        { day: 'Sun', weather: 'Sunny', high: 37, low: 21 },
    ];
    const WeatherIcon = ({ weather }) => {
        switch (weather) {
            case 'Sunny':
                return <span className="text-yellow-400">☀️</span>;
            case 'Cloudy':
                return <span className="text-gray-400">☁️</span>;
            case 'Rainy':
                return <span className="text-blue-400">🌧️</span>;
            default:
                return <span>❓</span>;
        }
    };
    return (
        <div className="bg-white p-5 h-full rounded shadow w-full border-2">
            <div className="text-lg font-bold mb-4">7-DAY FORECAST</div>
            {weekForecast.map((day, index) => (
                <div key={index} className="flex items-center px-5 py-7 justify-between border-b-2 border-gray-">
                    <div className="font-medium">{day.day}</div>
                    <WeatherIcon weather={day.weather} />
                    <div className="text-sm font-light">
                        {day.high}° / {day.low}°
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WeekForecast