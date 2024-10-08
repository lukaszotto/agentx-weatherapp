import { useState } from 'react'

import { ChartContainer } from './ChartContainer'
import { SearchInput } from './SearchInput'
import { SearchHistory } from './SearchHistory'
import { SearchCity } from './service/useAutocompleteQuery'
import { useWeatherQuery } from './service/useWeatherQuery'
import { findRelativeValueInRange } from './helpers/helpers'
import { Banner } from './Banner'
import { Weather } from './Weather'

function AppContainer() {
    const [selectedCity, setSelectedCity] = useState<SearchCity>()
    const [history, setHistory] = useState<SearchCity[]>([])

    const updateSelectedCity = (city: SearchCity | undefined) => {
        setSelectedCity(city)
        if (city) {
            const indexOfCity = history.findIndex((item) => item.id === city.id)
            if (indexOfCity > -1) {
                const moveCityToHead = history.sort((a, b) =>
                    a.id === city.id ? -1 : b.id === city.id ? 1 : 0
                )

                setHistory(moveCityToHead)
            } else {
                setHistory([city, ...history])
            }
        }
    }
    const { data } = useWeatherQuery(selectedCity)

    return (
        <>
            <Banner />
            <div className="md:max-w-md mx-auto px-16 md:px-4">
                <SearchInput setSelectedCity={updateSelectedCity} />
                {history.length > 0 && (
                    <SearchHistory
                        history={history}
                        setSelectedCity={updateSelectedCity}
                    />
                )}
                <ChartContainer
                    selectedCity={selectedCity}
                    dataset={[
                        findRelativeValueInRange(
                            data?.current.temp_c,
                            [-10, 40]
                        ),
                        findRelativeValueInRange(
                            data?.current.humidity,
                            [20, 100]
                        ),
                        findRelativeValueInRange(
                            data?.current.wind_kph,
                            [1, 40]
                        ),
                    ]}
                />
                {data && <Weather weatherData={data.current} />}
            </div>
        </>
    )
}

export default AppContainer
