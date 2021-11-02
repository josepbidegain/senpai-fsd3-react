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


    return (
    <>
        <ul className="navbar">
            {
                props.logueado == true ?
                    <NavItem id="segundoItem" name={`Bienvenido ${props.username}` } color="back" />
                :
                    <NavItem className="segundItem" name='Inicio' finalizado={props.finalizado} color="red" />                                    
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