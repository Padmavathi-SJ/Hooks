import { useState } from "react";

function useStateHook2() {

    const [car, setCar] = useState({
        brand: "Ferari",
        model: "Roma",
        year: "2024",
        color: "blue"
    });

    const changeColor = () => {
        setCar((prev) => {
            return {...prev, color: 'red'} // ...prev --> it wil keep the previous data as it was instead of not display the data
        })
    }

    /*
    const [model, setModel] = useState('Roma');
    const [year, setYear] = useState('2023');
    const [color, setColor] = useState('Red');
*/

    return(
        <>
        <h1>My {car.model} </h1>
        <h2>It is a {car.color} {car.model} from {car.year}</h2>
        <button onClick={changeColor}>Blue</button>
        </>
    )
}

export default useStateHook2;