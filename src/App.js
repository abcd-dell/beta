import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');  // State for the new task input
  const [tasks, setTasks] = useState([]); // State for the list of tasks

  // Handle the change in input field
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submission to add new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Handle task deletion
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <center>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </center>
    </div>
  );
}

export default App;
