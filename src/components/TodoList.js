import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState({
    morning: [],
    afternoon: [],
    tonight: [],
    newMorningTask: '',
    newAfternoonTask: '',
    newTonightTask: '',
  });

  const addNewTask = (timeOfDay, newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [timeOfDay]: [...prevTasks[timeOfDay], newTask],
      [getTimeOfDayFormState(timeOfDay)]: '', // Clear the form field after submitting
    }));
  };

  const handleSubmit = (event, timeOfDay) => {
    event.preventDefault();
    addNewTask(timeOfDay, tasks[getTimeOfDayFormState(timeOfDay)]);
  };

  const getTimeOfDayFormState = (timeOfDay) => {
    return `new${timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}Task`;
  };

  return (
    <>
      <h2>Things to do today</h2>
      <div>
        <h3>Morning: </h3>
        <form onSubmit={(e) => handleSubmit(e, 'morning')}>
          <div className="task-input">
            <input
              type="text"
              value={tasks.newMorningTask}
              onChange={(e) =>
                setTasks((prevTasks) => ({ ...prevTasks, newMorningTask: e.target.value }))
              }
            />
            <button type="submit">Add New Morning Task</button>
          </div>
        </form>
        <ul>
          {tasks.morning.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <hr />

      <div>
        <h3>Afternoon: </h3>
        <form onSubmit={(e) => handleSubmit(e, 'afternoon')}>
          <div className="task-input">
            <input
              type="text"
              value={tasks.newAfternoonTask}
              onChange={(e) =>
                setTasks((prevTasks) => ({ ...prevTasks, newAfternoonTask: e.target.value }))
              }
            />
            <button type="submit">Add New Afternoon Task</button>
          </div>
        </form>
        <ul>
          {tasks.afternoon.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <hr/>
      <div>
        <h3>Tonight:  </h3>
        <form onSubmit={(e) => handleSubmit(e, 'tonight')}>
          <div className="task-input">
            <input
              type="text"
              value={tasks.newTonightTask}
              onChange={(e) =>
                setTasks((prevTasks) => ({ ...prevTasks, newTonightTask: e.target.value }))
              }
            />
            <button type="submit">Add New Tonight Task</button>
          </div>
        </form>
        <ul>
          {tasks.tonight.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
