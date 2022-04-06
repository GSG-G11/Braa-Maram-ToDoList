import React from "react";
const ToDoList = ({ task , func ,complite,updateTask}) => {
    //date
//   let separator = "/";
//   let newDate = new Date();
//   let date = newDate.getDate();
//   let month = newDate.getMonth() + 1;
//   let year = newDate.getFullYear();
//   const dataMon = `${year}${separator}${
//     month < 10 ? `0${month}` : `${month}`
//   }${separator}${date}`;

//show task
  const tasklist = task.map((task,index) => {
    return (
      <div key={task.id} className="container">
          <input type='checkbox' checked={task.isComplite} onChange={()=>complite(index)} />
        <span> {task.task}</span>
        <span>{task.date}</span>
        <i  onClick={()=>func(task.id)} className="fas fa-trash"></i>
        <i  onClick={()=>updateTask(task.id)} className="fas fa-edit"></i>
      </div>
    );
  });

  // new Date(taskEdit.date).toISOString();

 
  return <div>{tasklist}</div>;
};

export default ToDoList;
