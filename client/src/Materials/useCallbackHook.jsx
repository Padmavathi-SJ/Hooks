/* useCallback Hook
--> useCallback is react hook that lets us cache a function defenition between re-renders.
It means, when we use useCallback Hook, it does not create multiple instance of same function when re-render happens.

--> Instead of creating new instance of the function, it provides the cached function on re-render of the component.

--> if useCallback hook is having its function and dependency means, whenever the dependency updates, it will create new function every time.
--> if useCallback is not having any dependency , it will work with cached function, then if cahed function and actual function is same , it prevents the component for unnecessary re-rendering.
--> This is nothing storing function in cache memory
*/

import { useState, useCallback } from "react";
import Header from './Header'

function useCallbackHook(){

    const [count, setCount] = useState(0);

    const newFn = useCallback(()=>{}, [])

    const changeCount = () => {
        setCount(prev => prev + 1)
    }

    return(
        <>
        <Header newFn={newFn}/>

        <h1>{count}</h1>
        <button onClick={changeCount}>Click</button>
        </>
    )
}

export default useCallbackHook;