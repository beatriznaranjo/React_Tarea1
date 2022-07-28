import React from "react"

export default function Count({currentCount, incrementar}) {

    return (
        <div>
            <h4>Current count: {currentCount}</h4>
            <h4>Pevious count: {currentCount === 0 ? 0 : (currentCount - 1)} </h4>
            <button onClick={incrementar}>Increment</button>
        </div>
    )

}