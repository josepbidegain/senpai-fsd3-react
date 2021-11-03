import React from 'react'

function Titulo2 (props) {
    if (props.chqueado) {
        return <h2>Este es un h2</h2>
    }

    return <h1>Hola esto es un titulo</h1>
}

export default Titulo2