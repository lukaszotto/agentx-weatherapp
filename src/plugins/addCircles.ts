import { Chart as Chartjs } from 'chart.js'

export const addCirclesPlugin = {
    id: 'addCirclesPlugin',
    afterDraw: (chart: Chartjs) => {
        const ctx = chart.ctx
        const scales = chart.scales.r
        scales.getLabels().forEach((label, i) => {
            const position = scales.getPointPosition(i, scales.drawingArea) // Pozycja etykiety

            ctx.save()
            ctx.translate(position.x, position.y)

            ctx.beginPath()
            ctx.arc(0, 0, 4, 0, 2 * Math.PI)
            ctx.fillStyle = '#d8d8d8'
            ctx.fill()
            ctx.lineWidth = 2
            ctx.strokeStyle = '#a1a1a1'
            ctx.stroke()

            ctx.restore()
        })
    },
}
