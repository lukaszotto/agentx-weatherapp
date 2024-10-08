import { SearchCity } from './service/useAutocompleteQuery'

type SearchHistoryProps = {
    history: SearchCity[]
    setSelectedCity: (city: SearchCity) => void
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
    history = [],
    setSelectedCity,
}) => {
    return (
        <div className="py-3">
            <p className="text-black py-2">Search history</p>
            <div className="flex">
                {history.slice(0, 4).map((item) => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                setSelectedCity(item)
                            }}
                            type="button"
                            className="py-3 px-4 text-sm font-semibold bg-blue-700 text-white hover:bg-blue-600 rounded-md mr-5"
                        >
                            {item.name} {item.region}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
