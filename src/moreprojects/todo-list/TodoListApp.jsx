import React, { useState } from 'react'
import './form.css'
import {RiDeleteBin5Line} from 'react-icons/ri'

export default function TodoListApp() {

  const [taskname, setTaskname] = useState('');
  const [taskList, setTaskList] = useState([]);

  const taskListContent = taskList.map((task, index) => {
    return (
      <div>
        <p>{task}</p>
        <RiDeleteBin5Line color='red' size={20} onClick={() => deleteTask(index)}/>
      </div>
    )});

  function addTask() {
    setTaskList([...taskList, taskname]);
    setTaskname('');
  }

  function deleteTask(index) {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  }

  return (
    <div>

      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>React Todo List</h1>
          <input type="text" place holder="Enter task?" 
            className="form-control"
            value={taskname}
            onChange={(e) => setTaskname(e.target.value)}
          />
          <button className='btn btn-success' onClick={addTask}>Add</button>
<br/>
{taskListContent}

        </div>
      </div>



    </div>
  )
}
