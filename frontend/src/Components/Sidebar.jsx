import { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
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
              <FaTasks className='h-4 w-4'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                All tasks
              </span>
              </li>
        <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                `}
            >
              <MdOutlineAddCircle className='h-4 w-4'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
               Add Task
              </span>
              </li>
        <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
             `}
            >
              <FaUserAlt className='w-4 h-4'/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Login
              </span>
              </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
      <div class="max-w-full">
      
        <div class="bg-dark-purple text-white py-4 px-6 rounded-t-lg">
            <h1 class="text-3xl font-bold">Task List</h1>
            <input type="text" placeholder="Search by Task Title or members name"
                class="mt-2 px-4 py-2 w-[300px] rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
        </div>

        
        <div class="mt-4 space-y-4">
            
            <div class="bg-white shadow-md rounded-lg p-4">
                <h2 class="text-lg font-semibold">Task Title 1</h2>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
                    pretium justo. Donec efficitur ligula id magna cursus, at rhoncus magna porttitor.</p>
                <div class="mt-2">
                    <span class="text-gray-500">Completed by:</span>
                    <ul class="list-inside mt-1">
                        <li class="text-gray-700">John Doe</li>
                       
                    </ul>
                </div>
            </div>

            
            <div class="bg-white shadow-md rounded-lg p-4">
                <h2 class="text-lg font-semibold">Task Title 2</h2>
                <p class="text-gray-600">Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                    ac turpis egestas.</p>
                <div class="mt-2">
                    <span class="text-gray-500">Completed by:</span>
                    <ul class=" list-inside mt-1">
                        <li class="text-gray-700">Jane Smith</li>
                    </ul>
                </div>
            </div>

        
        </div>
    </div>
      </div>
    </div>
  );
};

export default Sidebar;
