import './Nav.css'
import NavItem, { OtroComponente } from './NavItem'

/*
// arrow function (funcion flecha)
const NavItem = () => {
    return <li><a href='#'>{props.name}</a></li>
}
function NavItem() {
    return JSX
}
*/

function Nav(props) {

    const handleClick = () => {
        console.log('hizo click')
    }

    return (
    <>
        <ul className="navbar">
            {
                props.logueado == true ?
                    <NavItem hizoClick={handleClick} name={`Bienvenido ${props.username}`} id="segundoItem" color="back" />
                :
                    <NavItem className="segundItem" name='Login' finalizado={props.finalizado} color="red" />                                    
            }
            
        </ul>
    </>)
}

/*
class Item extends React.Component {
    render() {

    }
}
*/

export default Nav