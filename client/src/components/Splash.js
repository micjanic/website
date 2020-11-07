import React, { useState, useEffect } from 'react'
import { BuildStage } from './BuildStage'
import 

//custom hooks
import { useStage } from '../hooks/useStage'

import { createStage } from '../sceneHelpers'

export const Splash = () => {
    const [stage, setStage] = useState([])

    const reset = () => {}
    const checkStageBorders = () => {}
    const addToStage = () => {
      setStage()
    }

    useEffect(() => {}, [])

    return (
        <div className="splash-container">
            <BuildStage stage={stage} />
        </div>
    )
}
