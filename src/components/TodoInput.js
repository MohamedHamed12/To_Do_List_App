import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border rounded-l flex-grow"
        placeholder="Add a new task..."
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-r">
        Add
      </button>
    </form>
  );
}

export default TodoInput;
