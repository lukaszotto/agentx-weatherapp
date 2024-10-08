import { Chart } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    RadialLinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from 'chart.js'
import { SearchCity } from './service/useAutocompleteQuery'
type ChartContainerProps = {
    dataset: number[]
    selectedCity: SearchCity | undefined
}

Chartjs.register(RadialLinearScale, PointElement, LineElement, Tooltip, Filler)

export const ChartContainer: React.FC<ChartContainerProps> = ({
    dataset = [],
    selectedCity,
}) => {
    return (
        <div className="mt-8">
            {selectedCity && (
                <div className=" pr-3">
                    <p className="text-lg text-black">
                        Pogoda dla {selectedCity.name} {selectedCity.region}{' '}
                        <span className="text-xs text-gray-500">
                            {selectedCity.country}
                        </span>
                    </p>
                </div>
            )}
            <Chart
                type="radar"
                options={{
                    responsive: true,
                    scales: {
                        r: {
                            pointLabels: {
                                color: '#ccc',
                                font: {
                                    weight: 'normal',
                                    size: 18,
                                },
                            },
                            angleLines: {
                                color: '#666',
                                lineWidth: 1,
                            },
                            grid: {
                                color: [
                                    '#000',
                                    '#666',
                                    '#666',
                                    '#aaa',
                                    '#aaa',
                                    '#aaa',
                                ],

                                lineWidth: 1,
                            },
                            ticks: {
                                stepSize: 2,
                                display: false,
                            },
                            min: 1,
                            max: 10,
                        },
                    },
                }}
                data={{
                    labels: ['Temperature', 'Humidity', 'Wind speed'],
                    datasets: [
                        {
                            backgroundColor: 'rgba(16, 110, 186, 0.5)',
                            fill: true,
                            data: dataset,
                            pointBackgroundColor: 'transparent',
                            pointBorderColor: 'transparent',
                            borderColor: 'transparent',
                        },
                    ],
                }}
            ></Chart>
        </div>
    )
}
