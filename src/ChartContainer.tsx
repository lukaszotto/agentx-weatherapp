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
import { drawShadowPlugin } from './plugins/drawShadow'
import { rotateLabelsPlugin } from './plugins/rotateLabels'
import { areaBackgroundPlugin } from './plugins/areaBackground'
import { addCirclesPlugin } from './plugins/addCircles'

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
                    plugins: {
                        areaBackgroundPlugin: {
                            colors: [
                                'rgba(242,242,243,255)',
                                'rgba(233,232,232,255)',
                                'rgba(233,221,215,255)',
                                'rgba(215,199,193,255)',
                                'rgba(209,198,195,255)',
                            ],
                        },
                    },
                    layout: {
                        padding: 40,
                    },
                    responsive: true,
                    scales: {
                        r: {
                            pointLabels: {
                                // pointLabels are drawn by rotateLabelsPlugin
                                display: false,
                            },
                            angleLines: {
                                color: '#c1c1c1',
                                lineWidth: 1,
                            },
                            grid: {
                                color: [
                                    '#000',
                                    '#9a9998',
                                    '#9a9998',
                                    '#c7c7c7',
                                    '#c7c7c7',
                                    '#c7c7c7',
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
                            backgroundColor: 'rgba(129,147,212, 0.5)',
                            fill: true,
                            data: dataset,
                            pointBackgroundColor: 'transparent',
                            pointBorderColor: 'transparent',
                            borderColor: 'transparent',
                        },
                    ],
                }}
                plugins={[
                    rotateLabelsPlugin,
                    areaBackgroundPlugin,
                    drawShadowPlugin,
                    addCirclesPlugin,
                ]}
            ></Chart>
        </div>
    )
}
