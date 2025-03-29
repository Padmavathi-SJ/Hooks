/* useRef
--> useRef is a hook that allow us to create mutabe variables,
which will bot re-render the component , --> it means , when we create a variable use useRef , if this variable's values changes, 
it will not re-render the component.

--> useRef is also used to access DOM elements
--> we can access DOM elements using useRef hook, and also can modify the DOM elements.


--> when any updates or state changing, if we don't want to re-render the whole component again, 
we can use "useRef" hook, it will not re-render the component when state changes.


*/

import { useState, useEffect, useRef } from "react"


function useRefHook() {

    const [value, setValue] = useState(0);
    
    const count=useRef(0);
   // console.log(count);

   useEffect(() => {
    count.current = count.current + 1;
   })

    const decreaseValue = () => {
        setValue(prev => prev - 1)
    }

    const increaseValue = () => {
        setValue(prev => prev + 1)
    }

   

    return(
        <>
        <button onClick={decreaseValue}>-1</button>
        <h1> {value} </h1>
        <button onClick={increaseValue}>+1</button>

        <h1>Rendered count: {count.current} </h1>
        </>
    )
}

export default useRefHook;