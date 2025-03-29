
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UseStateHook from './Materials/useStateHook';
import UseStateHook2 from './Materials/useStateHook2';
import UseStateHook3 from './Materials/useStateHook3';
import UseEffectHook1 from './Materials/useEffectHook1';

function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<UseStateHook />}/>
        <Route path="/example2" element={<UseStateHook2 />}/>  
        <Route path="/example3" element={<UseStateHook3 />}/>
        <Route path="/useEffect1" element={<UseEffectHook1 />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
