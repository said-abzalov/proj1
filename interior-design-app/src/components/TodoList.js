import React, { useState } from 'react';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
