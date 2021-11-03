import './Lista.css'

function Lista(props) {

    const titulo = props.titulo
    const color = props.color

    return (
        <>
            <h1>{titulo}</h1>
            <ul className="lista" style={{"background":color, "fontSize":"50px"}}>
                <li>Tarea1</li>
                <li>Tarea2</li>
                <li>Tarea3</li>
            </ul>
            
        </>
    )
}

export const Lista2 = (props) => {
    return (
        <>
            <h1>Lista de tarea 2s</h1>
            <ul>
                <li>Tarea4</li>
                <li>Tarea5</li>
                <li>Tarea6</li>
            </ul>
        </>
    )
}

export function Titulo(props) {
        {
            return(
        props.checked ? 
           <h1>Titulo from archivo Lista</h1>
        : 
           <h1>No tenemos informacion</h1>)
        }
}


export default Lista