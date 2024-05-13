import Sidebar from './Components/Sidebar';
import "./App.css";
import Header from './Components/Header';
import {useRecoilValue} from "recoil";
import userAtom from './Atoms/userAtom';
import {Navigate, Route,Routes} from "react-router-dom";
import Homepage from './Pages/Homepage';
import AuthPage from './Pages/Authpage';
import AddTask from './Pages/AddTask';
import { useState } from 'react';

const App = () => {
  const user=useRecoilValue(userAtom);
  const [loggedin,setloggedin]=useState(false);
  console.log(user);
  return (
    <div className='flex'>
    <Sidebar/>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/Add'element={<AddTask/>}/>
    <Route path="/Add" element={!user ? <Navigate to="/Auth" /> : <Navigate to="/Add"/>} />
    <Route path="/Auth" element={!user? <AuthPage/>: <Navigate to ="/Add"/>}/>
     
    </Routes>
    </div>
   
  );
};

export default App
