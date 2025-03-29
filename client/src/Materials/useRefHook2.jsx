/*
--> accessing the DOM element using useRef hook
*/

import {useRef } from 'react';

function useRefHook2() {

    const inputElement = useRef()

    const btnClicked = () => {
        console.log(inputElement.current);
        inputElement.current.style.background = "blue";
    }

    return(
        <>
        <input type="text" ref={inputElement}/> 
        <button onClick={btnClicked}>Click Here</button>

        </>
        //this is how we can use useRef to access DOM element
    )
}

export default useRefHook2;