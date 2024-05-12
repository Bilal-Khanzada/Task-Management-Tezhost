import React, { useState } from 'react';

const TaskForm = () => {
    // State for managing tasks
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [userName, setUserName] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Creating a new task object
        const newTask = {
            title: title,
            userName: userName,
        };
        // Adding the new task to the tasks array
        setTasks([...tasks, newTask]);
        // Clearing the input fields after submission
        setTitle('');
        setUserName('');
    };

    // Function to handle task deletion
    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            {/* Form for adding new tasks */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <button type="submit">Add Task</button>
            </form>

            {/* Displaying the list of tasks */}
            <div>
                {tasks.map((task, index) => (
                    <div key={index} className="bg-black shadow-md rounded-lg p-4 mt-4">
                        <h2 className="text-lg font-semibold">{task.title}</h2>
                        <p className="text-white-600">{task.userName}</p>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskForm;
