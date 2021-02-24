import { useState, useEffect } from "react"


function Clock () {

    
    const t = useState(new Date())
    
    let date = t[0]
    let setDate = t[1]

    let hours  = date.getHours()
    let minutes  = date.getMinutes()
    let seconds = date.getSeconds()
    

    function tick() { setDate(new Date()) }

    useEffect( () => { setInterval( tick, 1000) } , [] ) // Call setInterval only one time ([]) 

    return <span>{hours}:{minutes}:{seconds}</span>
}

export default Clock;