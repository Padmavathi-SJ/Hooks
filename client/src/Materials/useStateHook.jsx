import {useState} from 'react';

function useStateHook() {

  const [color, setColor] = useState("Red");
  

const changeColor = () => {
  setColor('Blue');
}

  return (
    <>
    <h1>My favourite color is {color} !</h1>
    <button onClick={changeColor}> Blue </button>
    </>
  );
}

export default useStateHook;


//useState:
// to update the existing values and show in frontend also the updated values we can sue useSate