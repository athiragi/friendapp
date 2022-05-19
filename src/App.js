import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Friend from './component/Friend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewfriend from './component/Viewfriend';

function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
         <Route path="/" exact element={<Friend/>}/>
         <Route path="/view" exact element={<Viewfriend/>}/>


       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
