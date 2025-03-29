import {useState} from "react";

function useStateHook3() {

    const[count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prev => prev + 2) //2
        setCount(prev => prev + 2) //4
        setCount(prev => prev + 2) //6
       // setCount(prev => prev + 2)
        
        
      //  console.log(count);

    }

    return (
        <>
        <h1>Count: {count} </h1>
        <button onClick={increaseCount}>Increase by 4</button>
        </>
    )
}

export default useStateHook3;