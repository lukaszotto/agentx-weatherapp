import { Chart as Chartjs } from 'chart.js'

export const areaBackgroundPlugin = {
    id: 'areaBackgroundPlugin',
    beforeDraw(chart: Chartjs, _args: any, options: { colors: string[] }) {
        const { ctx, scales } = chart
        const scale = scales.r
        const ticks = scale.ticks
        const labelsCount = chart.data.labels?.length || 0

        const colors = options.colors || []

        ctx.save()

        for (let i = ticks.length - 1; i > 0; i--) {
            const outerRadius = scale.getDistanceFromCenterForValue(
                ticks[i].value
            )
            const innerRadius = scale.getDistanceFromCenterForValue(
                ticks[i - 1].value
            )

            ctx.beginPath()

            // Rysujemy zewnętrzny wielokąt
            for (let j = 0; j <= labelsCount; j++) {
                const index = j % labelsCount
                const outerPoint = scale.getPointPosition(index, outerRadius)

                if (j === 0) {
                    ctx.moveTo(outerPoint.x, outerPoint.y)
                } else {
                    ctx.lineTo(outerPoint.x, outerPoint.y)
                }
            }

            for (let j = labelsCount; j >= 0; j--) {
                const index = j % labelsCount
                const innerPoint = scale.getPointPosition(index, innerRadius)
                ctx.lineTo(innerPoint.x, innerPoint.y)
            }

            ctx.closePath()

            ctx.fillStyle =
                colors[(ticks.length - 1 - i) % colors.length] ||
                'rgba(0,0,0,0)'
            ctx.fill()
        }

        ctx.restore()
    },
}
