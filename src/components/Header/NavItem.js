import React, { useState } from 'react'

/*
export default class NavItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leido: false,
            colorDeFondo: ''
        }
    }

    componentDidMount() {
        console.log("1.llamando a API para obtener datos")
    }

    componentShouldUpdate() {
        console.log('2. component shouldUpdate')
    }

    componentDidUpdate() {
        console.log('3. component shouldUpdate')
    }

    componentWillUnmount() {
        console.log('4.este component se va a destruir')
    }

    render() {
        return <li 
            style={{background:this.state.colorDeFondo,  textDecoration:this.state.leido ? 'line-through' : 'none'}}
            onClick={()=>{
                this.setState({leido:!this.state.leido, colorDeFondo:'green'})
            }}
            ><a href='#'>{this.props.name}</a></li>
    }
}*/

export default function NavItem(props) {
        /*
            const leido = useState(false)
            const leidoValue = leido[0]
            const setLeidoValue = leido[1]
        */
    const [leido,setLeido] = useState(false)
    const [colorDeFondo,setColorDeFondo] = useState('')

    return <li 
            style={{background:colorDeFondo,  textDecoration: leido ==true ? 'line-through' : 'none'}}
            onClick={()=>{
                setLeido(!leido)
                setColorDeFondo('green')
            }}>{props.name}</li>
}

export const OtroComponente = () => <h2>Otro Componente</h2>