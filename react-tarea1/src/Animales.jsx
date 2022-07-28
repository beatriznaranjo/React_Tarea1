import React from "react"

export default function Animales() {
    
    let animales = [
        { id: 1, name: 'Fido 🐕' },
        { id: 2, name: 'Snowball 🐈' },
        { id: 3, name: 'Murph 🐈⬛' },
        { id: 4, name: 'Zelda 🐈' },
    ]
    
    const animalesElementos = animales.map(animal => {
        return (
            <p>{animal.name}</p>
        )
    })

    return (
        <div>
            {animalesElementos}
        </div> 
    )

}