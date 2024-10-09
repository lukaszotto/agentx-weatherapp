import { Chart as Chartjs } from 'chart.js'

export const rotateLabelsPlugin = {
    id: 'rotateLabelsPlugin',
    afterDraw: (chart: Chartjs) => {
        const ctx = chart.ctx
        const scales = chart.scales.r
        scales.getLabels().forEach((label, i) => {
            const angleRadians = scales.getIndexAngle(i) // Kąt dla etykiety
            const position = scales.getPointPosition(i, scales.drawingArea + 20) // Pozycja etykiety
            const rotateLablBy = i === 0 ? 0 : angleRadians + Math.PI
            ctx.save()
            ctx.translate(position.x, position.y)
            ctx.rotate(rotateLablBy)

            // Rysowanie etykiety
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.font = '18px Arial'
            ctx.fillStyle = '#5e5e5e'
            ctx.fillText(label, 0, 0)

            ctx.restore() // Przywracamy pierwotny stan kontekstu
        })
    },
}
