import 'chart.js'

// Dodaj typ dla swojego pluginu
declare module 'chart.js' {
    interface PluginOptionsByType<TType extends keyof ChartTypeRegistry> {
        areaBackgroundPlugin?: {
            // Dodaj tutaj opcjonalne opcje konfiguracyjne dla twojego pluginu
            colors?: string[]
        }
    }
}
