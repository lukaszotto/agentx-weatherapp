import axios from 'axios'
import { BASE_WEATHER_URL } from '../config'
import { useQuery } from '@tanstack/react-query'
import { SearchCity } from './useAutocompleteQuery'

type WeatherResponse = {
    location: {
        name: string
        region: string
        country: string
        lat: number
        lon: number
        tz_id: string
        localtime_epoch: number
        localtime: string
    }
    current: WeaterCurrent
}

export type WeaterCurrent = {
    temp_c: number
    wind_kph: number
    humidity: number
}

const fetchWeather = async (
    city: string | undefined
): Promise<WeatherResponse> => {
    if (city === undefined) {
        throw Error('city can not be undefined')
    }
    const response = await axios.get(BASE_WEATHER_URL, {
        params: {
            q: city,
        },
    })
    return response.data
}

export const useWeatherQuery = (city: SearchCity | undefined) =>
    useQuery({
        queryKey: ['current', city?.url],
        queryFn: () => fetchWeather(city?.url),
    })
