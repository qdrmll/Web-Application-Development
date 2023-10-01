import React, { useState } from 'react';
import './App.css'; // Импортируем файл стилей

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container"> 
      <h1>Список задач</h1>
      <div>
        <input
          type="text"
          className="task-input" 
          placeholder="Добавить новую задачу"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="task-button" onClick={addTask}>Добавить</button> 
      </div>
      <ul className="task-list"> 
        {tasks.map((task) => (
          <li key={task.id} className="task-item"> 
            <span
              className={`task-text ${task.completed ? 'completed' : ''}`} 
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <div className="task-buttons"> 
              <button
                className="task-button"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? 'Отменить' : 'Завершить'}
              </button>
              <button
                className="task-button"
                onClick={() => removeTask(task.id)}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
