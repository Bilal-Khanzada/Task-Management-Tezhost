
import Sidebar from './Components/Sidebar';
import "./App.css";
import Header from './Components/Header';
import {useRecoilValue} from "recoil";
import userAtom from './Atoms/userAtom';
import {Navigate, Route,Routes} from "react-router-dom";


const App = () => {
  const user=useRecoilValue(userAtom);
  console.log(user);
  return (
    <>
    
   <Sidebar/>
    </>
  );
};

export default App
