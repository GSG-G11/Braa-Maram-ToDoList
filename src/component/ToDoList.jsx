import React from "react";
const ToDoList = ({ task , func ,complite,updateTask}) => {
//show task
  const tasklist = task.map((task,index) => {
    return (
    
      <div key={task.id} className='to-do-list'>
        <input className="complete" type='checkbox' checked={task.isComplite} onChange={()=>complite(index)}  placeholder="What "/>
        <span className="task"> {task.task}</span>
        <span className="date">{task.date}</span>
        <i  onClick={()=>func(task.id)} className="fas fa-trash icon"></i>
        <i  onClick={()=>updateTask(task.id)} className="fas fa-edit"></i>
      </div>
    
    );
  });

  // new Date(taskEdit.date).toISOString();

 
  return <div className='to-do'>{tasklist}</div>;
};

export default ToDoList;
