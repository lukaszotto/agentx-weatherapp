export const findRelativeValueInRange = (
    value: number | undefined,
    range: [min: number, max: number]
): number => {
    if (value === undefined) {
        return 1
    }
    const [min, max] = range
    const relativeValue = ((value - min) / (max - min)) * 9 + 1
    const roundedValue = Math.round(relativeValue * 100) / 100
    return Math.max(1, Math.min(10, roundedValue))
}
