import React, { useState } from 'react';

const TodoForm = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if newTask is not empty before adding it
    if (newTask.trim() !== '') {
      addNewTask('tonight', newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new task for Tonight:</h3>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
