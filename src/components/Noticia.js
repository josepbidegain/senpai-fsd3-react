
import { useParams } from 'react-router-dom'
import { noticias } from './Noticias'

const Noticia = () => {
    const params = useParams()
    //simulando que vamos a buscar la noticia con un ID al server 
    const noticia = noticias.filter( (noticia) => noticia.id == params.id)[0]

    {/* si entramos a un ID de una noticia que no existe retornamos No existe tal noticia */}
    return !noticia ? 
            <h1>No existe tal noticia</h1> 
        :
            <>
                <h1>
                    {noticia.titulo}
                </h1>
                <small>Estoy mostrando noticia con ID {params.id}</small>
                <main>
                    {noticia.contenido}
                </main>
            </>
    
}

export default Noticia