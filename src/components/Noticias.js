import { Link, Outlet } from "react-router-dom"

export const noticias = [
    {id:1, titulo:'Hoy es martes', contenido:'Contenido de Noticia Hoy es martes'},
    {id:2, titulo:'Estamos en  noviembre', contenido:'Contenido de Noticia Estamos en  noviembre'},
    {id:3, titulo:'Se viene el verano', contenido:'Contenido de Noticia S viene el verano'}
]

const Noticias = (props) => {
    
    const listadoNoticias = noticias.map((item)=>{
        const ruta = '/noticias/' + item.id
        return <li key={item.id}><Link to={ruta}>{item.titulo}</Link></li>
    })

    return (
        <>
            <h1>Lista de Noticias</h1>
            <ul>
                {listadoNoticias}
            </ul>
            <Outlet />
        </>
    )
}

export default Noticias