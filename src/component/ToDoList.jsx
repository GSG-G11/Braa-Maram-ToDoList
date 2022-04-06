import React from "react";
const ToDoList = ({ task , func }) => {
    //date
  let separator = "/";
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const dataMon = `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;

//show task
  const tasklist = task.map((task) => {
    return (
      <div key={task.id}>
        <span> {task.task}</span>
        <span>{dataMon}</span>
        <i  onClick={()=>func(task.id)} className="fas fa-trash"></i>
      </div>
    );
  });
 
  return <div>{tasklist}</div>;
};

export default ToDoList;
