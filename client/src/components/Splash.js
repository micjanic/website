import React, { useState } from 'react'
import { BuildStage } from './BuildStage'

//custom hooks
import { useStage } from '../hooks/useStage'

import { createStage } from '../sceneHelpers'

export const Splash = () => {
    const [stage, setStage] = useStage()

    const reset = () => {
        setStage(createStage())
    }

    return (
        <div className="splash-container">
            <BuildStage stage={stage} />
        </div>
    )
}
