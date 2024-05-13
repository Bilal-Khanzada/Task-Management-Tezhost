import { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import {Link} from "react-router-dom";
import userAtom from '../Atoms/userAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {useRecoilValue} from "recoil";
import { useNavigate } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import useShowToast from '../Hooks/useShowToast';


const Sidebar = () => {
    const setUser=useSetRecoilState(userAtom);
    const ShowToast=useShowToast();
    const navigate = useNavigate();
    const user=useRecoilValue(userAtom);
  const [open, setOpen] = useState(true);
  const handleLogout=async()=>{

    try{
        localStorage.removeItem("user-threads");
        const res= await fetch("/api/users/logout",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            }
        })
        const data=await res.json();
        console.log(data);
        if(data.error){
            ShowToast("Error",data.error,"error")
        }
        setUser(null);
        navigate("/")

    }
    catch(error){
        console.log(error)
    }
}

  return (
    <>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-black h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 ">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Tezhost
          </h1>
        </div>
        <ul className="pt-6">
        <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
             `}
             
            >
                <Link to="/" className='flex'>
              <FaTasks className='h-4 w-4 mr-4'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                All tasks
              </span>
                </Link>
              </li>
        <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                `}
             
            >
                <Link to={`${user? "/Add": "/Auth"}`} className='flex'>
              <MdOutlineAddCircle className='h-4 w-4 mr-4'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
               Add Task
              </span>
                </Link>
                   
              </li>
        <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
             `} 
             
            >
                    {
                        user ?
             
                <div  className='flex' onClick={handleLogout}>
                <BiLogOut className='w-4 h-4 mr-4'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
              </span>
                </div>
                :
                <Link to="/Auth">

                <div  className='flex'>
                <IoLogIn className='w-4 h-4 mr-4'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Login
              </span>
                </div>
                </Link>
            }
              </li>
        </ul>
      </div>
      
    </>
  );
};

export default Sidebar;
