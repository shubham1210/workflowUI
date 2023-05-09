import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <>

    <Routes>
        <Route path="/" element={ <SignIn/> } />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
    
  );
}

export default App;
