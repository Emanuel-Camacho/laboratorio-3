import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => toggleTask(index)}>{task.name}</span>
                    <button onClick={() => deleteTask(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
