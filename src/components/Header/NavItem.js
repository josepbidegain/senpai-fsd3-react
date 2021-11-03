import PropTypes from 'prop-types'
import { useState } from 'react'

export default function NavItem({color,name}) {
    const [leido,setLeido] = useState(false)
    //const color = props.color
    //const name = props.name
    //const {color, name} = props
    return <li 
            style={{background:color,  textDecoration: leido ? 'line-through' : 'none'}}
            onClick={()=>setLeido(!leido)}
            ><a href='#'>{name}</a></li>
}

NavItem.propTypes = {
    name: PropTypes.string
}

export const OtroComponente = () => <h2>Otro Componente</h2>