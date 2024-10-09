import { Chart as Chartjs } from 'chart.js'

export const drawShadowPlugin = {
    id: 'drawShadowPlugin',
    beforeDatasetsDraw: function (chart: Chartjs) {
        const ctx = chart.ctx
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i)
            if (!meta.hidden) {
                ctx.save()
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
                ctx.shadowBlur = 10
                ctx.shadowOffsetX = 5
                ctx.shadowOffsetY = 5

                ctx.fillStyle = dataset.backgroundColor

                ctx.beginPath()
                meta.data.forEach((point, index) => {
                    if (index === 0) {
                        ctx.moveTo(point.x, point.y)
                    } else {
                        ctx.lineTo(point.x, point.y)
                    }
                })
                ctx.closePath()
                ctx.fill()

                ctx.restore()
            }
        })
    },
}
