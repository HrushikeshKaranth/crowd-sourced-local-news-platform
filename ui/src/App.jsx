import './App.css';
import Authentication from './components/Authentication';
import Header from './components/Header';
import Home from './components/Home';
import ListNews from './components/ListNews';
import UploadNews from './components/UploadNews';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Authentication/>} path='/auth'/>
    </Routes>
    </div>
  );
}

export default App;
