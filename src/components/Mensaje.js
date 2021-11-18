export default (props)=> {
    console.log('dibujado de componente mensaje')
    return <p onClick={()=>props.handleClick()} style={{background:props.color, color:props.fontColor}}>Mensaje {props.id} (Al clickear cambio de color)</p>
}
