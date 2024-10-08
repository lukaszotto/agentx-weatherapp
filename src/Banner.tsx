export const Banner: React.FC = () => {
    return (
        <div className="min-h-[164px] py-8 p-16 bg-gradient-to-r from-blue-700 to-blue-400 ">
            <h1 className="text-3xl font-bold text-white">
                Welcome to AgentX weatherapp!
            </h1>
            <p className="text-base text-gray-200 mt-4">
                Best weather prediction thanks to{' '}
                <a className="text-white" href="https://www.weatherapi.com/">
                    Weatherapi
                </a>
            </p>
        </div>
    )
}
