import { ChangeEvent, useEffect, useState } from "react"
import React from "react"

interface Trip { text:string, taxi:string, location:string, destination:string, done: boolean }

let initialTrips : Trip[] = [
]

const initialState = {
        desc: "",
        lastName: "",
        registration: "",
        location1: "",
        destination1: "",
};


function ToDoList() {

    const [state, setState] = React.useState(initialState)
    const [trips, setTrips] = useState([] as Trip[])


    function loadTrips() {
        fetch("./trips.json")
        .then(data => data.json())
        .then(trips => setTrips(trips) )
    }
    useEffect( loadTrips, [] )

    function changeText(x:ChangeEvent<HTMLInputElement>) {
        const value = x.target.value;
        setState({
          ...state,
          [x.target.name]: value
        })
    }

    function submit(e:any) {
        e.preventDefault()
        setTrips( [...trips, {text: state.desc, taxi: state.registration, location: state.location1, destination: state.destination1,  done: false}] )
        setState(initialState)
    }

    function handleToggle(i:number ) {
        // Functional Javascript
        setTrips( trips.map( (t,j) => j === i ? {...t, done:!t.done} : t ) )
    }


    return <div>
        <form>
            Taxi Registration: <input type="text" name="registration" onChange={changeText} value={state.registration}></input>
            <br></br>
            Time Interval: <input type="text" name="desc" onChange={changeText} value={state.desc}></input>
            <br></br>
            Location: <input type="text"  name="location1" onChange={changeText} value={state.location1}></input>
            <br></br>
            Destination: <input type="text" name="destination1" onChange={changeText} value={state.destination1}></input>
            <br></br>
            <input type="submit" value="Call Car To Location" onClick={submit}></input>
        </form>
        <ul>
            {
                trips.map((t, i) => {
                    let x = t.done ? { textDecoration: 'line-through'} : {}

                    return <li key={i} onClick={() => handleToggle(i)} style={x}>#{t.text} {t.taxi} {t.location} {t.destination}</li>
                })
            }
        </ul>
    </div>
}

export default ToDoList