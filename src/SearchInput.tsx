import { useState } from 'react'
import { SearchIcon } from './icons/SearchIcon'
import { SpinnerIcon } from './icons/Spinner'
import {
    SearchCity,
    useAutocompleteQuery,
} from './service/useAutocompleteQuery'
import useDebounce from './useDebounce'

type SearchInputProps = {
    setSelectedCity: (city: SearchCity | undefined) => void
}
export const SearchInput: React.FC<SearchInputProps> = ({
    setSelectedCity,
}) => {
    const [city, setCity] = useState('')
    const debouncedCity = useDebounce(city, 500)

    const { isLoading, data } = useAutocompleteQuery(debouncedCity)
    return (
        <>
            <form
                noValidate
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className="flex rounded-md mt-8 border-2 border-blue-500 overflow-hidden relative overflow-visible"
            >
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="Start typing city name"
                    className="search__input w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
                />
                <button className="flex items-center justify-center bg-blue-700 px-5">
                    <SearchIcon />
                </button>
                {isLoading && (
                    <div className="search__dropdown absolute p-4 top-12 bg-white left-0 right-0 shadow-lg bg-white rounded">
                        <div className="flex justify-center">
                            <SpinnerIcon />
                        </div>
                    </div>
                )}
                {data && (
                    <div className="search__dropdown absolute p-4 top-12 bg-white left-0 right-0 shadow-lg bg-white rounded">
                        {data.length === 0 && (
                            <p className="text-sm text-black">City not found</p>
                        )}
                        {data.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="cursor-pointer pb-2"
                                    onMouseDown={() => {
                                        setCity('')
                                        setSelectedCity(item)
                                    }}
                                >
                                    <p className="text-sm text-black">
                                        {item.name} {item.region}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.country}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </form>
        </>
    )
}
