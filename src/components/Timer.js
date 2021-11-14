import { useState, useEffect } from 'react'
function Timer() {

    let [time, setTime] = useState(5);

    useEffect(() => {
        let timer = setInterval(() => {
          setTime(time - 1);
        }, 1000)
        return () => clearInterval(timer);
    } );

    return <div>{time}</div>
}

export default Timer