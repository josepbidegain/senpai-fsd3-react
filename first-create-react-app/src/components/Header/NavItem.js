import PropTypes from 'prop-types'

export default function NavItem({color,name}) {
    //const color = props.color
    //const name = props.name
    //const {color, name} = props
    return <li style={{background:color}}><a href='#'>{name}</a></li>
}

NavItem.propTypes = {
    name: PropTypes.string
}

export const OtroComponente = () => <h2>Otro Componente</h2>