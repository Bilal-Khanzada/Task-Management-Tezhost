import Sidebar from './Components/Sidebar';
import "./App.css";
import Header from './Components/Header';
import {useRecoilValue} from "recoil";
import userAtom from './Atoms/userAtom';
import {Navigate, Route,Routes} from "react-router-dom";
import Homepage from './Pages/Homepage';
import AuthPage from './Pages/Authpage';
import AddTask from './Pages/AddTask';

const App = () => {
  const user=useRecoilValue(userAtom);
  console.log(user);
  return (
    <div className='flex'>
    <Sidebar/>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Add" element={<AddTask/>}/>
    <Route path="/Auth" element={<AuthPage/>}/>
    
    </Routes>
    </div>
   
  );
};

export default App
