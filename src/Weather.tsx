import { RainDropIcon } from './icons/RainDrop'
import { TemperatureIcon } from './icons/Temperature'
import { WindIcon } from './icons/WindIcon'
import { WeaterCurrent } from './service/useWeatherQuery'

type WeatherProps = {
    weatherData: WeaterCurrent
}

export const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
    return (
        <div className="py-3">
            <div className="flex align-center mb-2">
                <RainDropIcon />
                <p className="text-gray-800 ml-4">
                    Humidity: {weatherData.humidity} %
                </p>
            </div>
            <div className="flex align-center mb-2">
                <TemperatureIcon />
                <p className="text-gray-800 ml-4">
                    Temperature: {weatherData.temp_c} C
                </p>
            </div>
            <div className="flex align-center mb-2">
                <WindIcon />
                <p className="text-gray-800 ml-4">
                    Wind speed: {weatherData.wind_kph} kph
                </p>
            </div>
        </div>
    )
}
