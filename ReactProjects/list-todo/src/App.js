import React from 'react';
import TodoList from './components/ListTODO';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark " style={{ backgroundColor: '#2A3A42' }}>
        <h1 className="text-center text-white p-3 mx-auto">TASK MANAGER</h1>
      </nav>
      <div className="p-3 text-center text-white" style={{ height: '50px', backgroundColor: 'rgb(46, 46, 46)' }}>
        <h5>your tasks</h5>
      </div>
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
