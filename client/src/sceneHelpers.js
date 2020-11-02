export const BUILD_MIN_WIDTH = 2
export const BUILD_MAX_WIDTH = 4
export const BUILD_MIN_HEIGHT = 3
export const BUILD_MAX_HEIGHT = 7

export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const createBuild = () => {
    const randomWidth = randomBetween(BUILD_MIN_WIDTH, BUILD_MAX_WIDTH)
    const randomHeight = randomBetween(BUILD_MIN_HEIGHT, BUILD_MAX_HEIGHT)

    return Array.from(Array(randomHeight), () => Array(randomWidth).fill([0]))
}

export const createStage = () => {
    const viewportWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    )

    return Array.from(Array(viewportWidth / 8), () => 0)
}
