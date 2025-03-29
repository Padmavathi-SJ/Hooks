// useEffect

/*
1. Allow us to perform sideEffects in our component
example:  1. fetching data from api
          2. Directly updating DOM
          3. set time out, set time intervals


--> useEffect will have 2 things --> callback func(), dependencies
We can use useEffect with any dependencies
callback fn, and with empty array also we can use

1. --> Whenever we are using useEffect without any dependencies, then it will execute its function,
whenever any state changes in this component.

2. --> If we are added an empty array or whenever we are using an empty array, then it will execute the callback function
only once when the component gets loaded.

3. ---> if we give count inside array --> whenever the count changes the useEffect function again will be executed 
          */


import { useEffect, useState } from "react";

function useEffectHook1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('React Hooks');

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count+1);
        }, 2000)
    }, [count, name])

    
    return(
        <>
        <h1>I have rendered {count} times!</h1>
        </>
    )
}

export default useEffectHook1;