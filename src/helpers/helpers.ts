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

export const removePolishChars = (text: string): string => {
    const polishCharsMap: { [key: string]: string } = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z',
        Ą: 'A',
        Ć: 'C',
        Ę: 'E',
        Ł: 'L',
        Ń: 'N',
        Ó: 'O',
        Ś: 'S',
        Ź: 'Z',
        Ż: 'Z',
    }

    return text
        .split('')
        .map((char) => polishCharsMap[char] || char)
        .join('')
}
