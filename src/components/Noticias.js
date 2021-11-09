import { Link } from "react-router-dom"

export const noticias = [
    {id:1, titulo:'Hoy es martes', contenido:'Contenido de Noticia Hoy es martes'},
    {id:2, titulo:'Estamos en  noviembre', contenido:'Contenido de Noticia Estamos en  noviembre'},
    {id:3, titulo:'Se viene el verano', contenido:'Contenido de Noticia S viene el verano'}
]

const Noticias = (props) => {
    
    const listadoNoticias = noticias.map((noticia)=>{
        const ruta = '/noticias/' + noticia.id
        return <li><Link to={ruta}>{noticia.titulo}</Link></li>
    })

    return (
        <>
            <h1>Lista de Noticias</h1>
            <ul>
                {listadoNoticias}
            </ul>
        </>
    )
}

export default Noticias