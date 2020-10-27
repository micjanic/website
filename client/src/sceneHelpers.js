const BUILD_MIN_WIDTH = 3
const BUILD_MAX_WIDTH = 8
const BUILD_MIN_HEIGHT = 3
const BUILD_MAX_HEIGHT = 10

const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const createBuild = () => {
    const randomWidth = randomBetween(BUILD_MIN_WIDTH, BUILD_MAX_WIDTH)
    const randomHeight = randomBetween(BUILD_MIN_HEIGHT, BUILD_MAX_HEIGHT)

    return Array.from(Array(randomHeight), () =>
        Array(randomWidth).fill([undefined])
    )
}
