import axios from 'axios'
import { SEARCH_WEATHER_URL } from '../config'
import { useQuery } from '@tanstack/react-query'
import { removePolishChars } from '../helpers/helpers'

export type SearchCity = {
    country: string
    id: number
    lat: number
    lon: number
    name: string
    region: string
    url: string
}
const fetchLocation = async (city: string): Promise<SearchCity[]> => {
    if (city === '' || city === undefined) {
        throw Error('no city provided')
    }
    const response = await axios.get(SEARCH_WEATHER_URL, {
        params: {
            q: removePolishChars(city),
        },
    })
    return response.data
}

export const useAutocompleteQuery = (city: string) =>
    useQuery({
        queryKey: ['search', city],
        queryFn: () => fetchLocation(city),
        retry: false,
    })
