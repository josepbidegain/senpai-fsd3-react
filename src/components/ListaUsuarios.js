

export default function ListaUsuarios(props) {
    
    return (
        <>
            <h1> Lista de usuarios obtenidos de api externa </h1>
            <ul>
                {
                    props.users.map(function(usuario) {
                        return <li style={{listStyle:"none"}} key={usuario.id}>{usuario.name}</li>
                    })
                }
            </ul>
        </>
    )
    
}