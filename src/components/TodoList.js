import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState({
    morning: [{ task: 'Water the plants', completed: true,},
    { task: 'Read a book', completed: false },
    { task: 'Prepare breakfast', completed: true },],
    afternoon: [{ task: 'Go for a walk', completed: false },
    { task: 'Write in the journal', completed: true },
    { task: 'Work on a personal project', completed: false },],
    tonight: [ { task: 'Watch a movie', completed: false },
    { task: 'Practice meditation', completed: true },
    { task: 'Call a friend', completed: true },],
    newMorningTask: '',
    newAfternoonTask: '',
    newTonightTask: '',
    completed: [],
  });

  const addNewTask = (timeOfDay, newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [timeOfDay]: [...prevTasks[timeOfDay], { task: newTask, completed: false }],
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

  const handleTaskCompletion = (timeOfDay, index) => {
    const taskList = [...tasks[timeOfDay]];
    taskList[index].completed = !taskList[index].completed;
    setTasks((prevTasks) => ({
      ...prevTasks,
      [timeOfDay]: taskList,
      completed: taskList[index].completed
        ? [...prevTasks.completed, taskList[index]]
        : prevTasks.completed.filter((task) => task !== taskList[index]),
    }));
  };

  

  return (
    <>
      <h2>Things to do today</h2>
      <div className="task-container">
        
      <div>
        <h3>Morning</h3>
        <form onSubmit={(e) => handleSubmit(e, 'morning')}>
          <div className="task-input">
            <input
              type="text"
              value={tasks.newMorningTask}
              onChange={(e) =>
                setTasks((prevTasks) => ({ ...prevTasks, newMorningTask: e.target.value }))
              }
            />
            <button type="submit">Add New Task</button>
          </div>
        </form>
        <ul>
          {tasks.morning.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion('morning', index)}
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginLeft: '10px',
                }}
              >
                {task.task}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h3>Afternoon</h3>
        <form onSubmit={(e) => handleSubmit(e, 'afternoon')}>
          <div className="task-input">
            <input
              type="text"
              value={tasks.newAfternoonTask}
              onChange={(e) =>
                setTasks((prevTasks) => ({ ...prevTasks, newAfternoonTask: e.target.value }))
              }
            />
            <button type="submit">Add New Task</button>
          </div>
        </form>
        <ul>
          {tasks.afternoon.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion('afternoon', index)}
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginLeft: '10px',
                }}
              >
                {task.task}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr/>
      <div>
        <h3>Tonight</h3>
        <form onSubmit={(e) => handleSubmit(e, 'tonight')}>
          <div className="task-input">
            <input
              type="text"
              value={tasks.newTonightTask}
              onChange={(e) =>
                setTasks((prevTasks) => ({ ...prevTasks, newTonightTask: e.target.value }))
              }
            />
            <button type="submit">Add New Task</button>
          </div>
        </form>
        <ul>
          {tasks.tonight.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion('tonight', index)}
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginLeft: '10px',
                }}
              >
                {task.task}
              </span>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <hr/>
      <div>
        <h3>Completed</h3>
        <ul>
          {tasks.completed.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={true}
                readOnly
              />
              <span style={{ textDecoration: 'line-through', marginLeft: '10px', opacity:'0.7' }}>
                {task.task}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;