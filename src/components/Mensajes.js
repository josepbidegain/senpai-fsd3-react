
import {useState,useEffect} from 'react'
import Mensaje from './Mensaje'

const Mensajes=()=>{
    const [color1,setColor1] = useState('red');
    const [color2,setColor2] = useState('blue');
    const [color3,setColor3] = useState('yellow');

    useEffect(()=>{
        console.log('useEffecet Mensajes component, unica vez, puedo llamar a APIs externas para traer info')
        //fetch('urlAPI')
    },[])

    useEffect(()=>{
        console.log('useEffect Mensajes component, 1er render y refresh despues de cambiar color 1')

        return ()=>{console.log('destruyendo 3er Mensaje')}
    }, [color1])

    return(
        <div className="mensajes">
            <h1>Mensajes</h1>
            <Mensaje key={1} id='1' handleClick={()=>setColor1(color1 == 'red'? 'orange': 'red')} color={color1} fontColor="white" type="info" />
            <Mensaje key={2} id='2' handleClick={()=>setColor2(color2 == 'blue'? 'orange': 'blue')} color={color2} fontColor="white" type="info" />
            {
                color1 === 'red' && <Mensaje key={3} id='3' handleClick={()=>setColor3(color3 == 'yellow'? 'orange': 'yellow')} color={color3} fontColor="white" type="info" />
            }
            
        </div>
    )
}
export default Mensajes;