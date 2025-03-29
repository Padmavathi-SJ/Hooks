import UseStateHook from './Materials/useStateHook';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<UseStateHook />}/>  
      </Routes>
    </Router>
    </>
  );
}

export default App;
