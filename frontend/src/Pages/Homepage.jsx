import React from 'react'

const Homepage = () => {
   

  return (
    <div className="h-screen flex-1 p-7">
    <div className="max-w-full">
    
      <div class="bg-dark-purple text-white py-4 px-6 rounded-t-lg">
          <h1 class="text-3xl font-bold">Task List</h1>
          <input type="text" placeholder="Search by Task Title or members name"
              class="mt-2 px-4 py-2 w-[300px] rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
      </div>

      
      <div class="mt-4 space-y-4">
          
          <div class="bg-black shadow-md rounded-lg p-4">
              <h2 class="text-lg font-semibold">Task Title 1</h2>
              <p class="text-white-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
                  pretium justo. Donec efficitur ligula id magna cursus, at rhoncus magna porttitor.</p>
              <div class="mt-2">
                  <span class="text-white-500">Completed by:</span>
                  <ul class="list-inside mt-1">
                      <li class="text-gray-500">John Doe</li>
                     
                  </ul>
              </div>
          </div>

          
          <div class="bg-black shadow-md rounded-lg p-4">
              <h2 class="text-lg font-semibold">Task Title 2</h2>
              <p class="text-white-600">Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.</p>
              <div class="mt-2">
                  <span class="text-white-500">Completed by:</span>
                  <ul class=" list-inside mt-1">
                      <li class="text-gray-500">Jane Smith</li>
                  </ul>
              </div>
          </div>

      
      </div>
  </div>
    </div>
  )
}

export default Homepage