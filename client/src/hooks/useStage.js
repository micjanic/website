import React, { useState, useEffect } from 'react'
import { createBuild, createStage } from '../sceneHelpers'

export const useStage = () => {
    const [stage, setStage] = useState()

    useEffect(() => {
        const stageWithBuilds = stage.map((col) => {
            return createBuild()
        })
    }, [stage])

    return [stage, setStage]
}
