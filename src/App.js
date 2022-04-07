import React, { Component } from "react";
import AddToDo from "./component/AddToDo";
import ToDoList from "./component/ToDoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

 class App extends Component {

  state={
    task:[
      {id:uuidv4(),task:"create to do app",date:'4/4/2022',isComplite:false,itemEdit:false},
      {id:uuidv4(),task:"create components",date:'4/4/2022',isComplite:true,itemEdit:false}
    ],
   taskItem:'',
   date:'',
   edit:false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
};

handleSubmit = (event) =>{
    event.preventDefault();
    const {taskItem,date}= this.state;
  this.setState((preve)=>{
    preve.task.push({id:uuidv4(),task:taskItem,date:date,isComplite:false, edit:false})
    preve.taskItem=''
    preve.date=''
    preve.edit=false
   return(preve)
    })
  }

  toggleComplete=(index)=>{
const itemTask = [...this.state.task]
itemTask[index].isComplite = !itemTask[index].isComplite
this.setState({task:itemTask})
  }

  deleteTask = (id) => {
    const taskList = this.state.task.filter((item) => {
      return item.id !== id;
    });
    this.setState({ task: taskList });
  };

updateTask = (id) => {
  const taskUpdate = this.state.task.filter((item)=>{
    return item.id !==id
  })
  const taskedit = this.state.task.find((item)=>{
    return item.id === id
  })
this.setState({
  task:taskUpdate,
  taskItem:taskedit.task,
  date:taskedit.date,
  edit:true
})
}

render(){
  const {task , taskItem,date,edit} = this.state;
  return (
    <div className="container">
     <h1 className="title">To Do  App</h1>
     <AddToDo   handleChange={this.handleChange} task={taskItem} date={date} handleSubmit={this.handleSubmit} edit={edit}/>
     <ToDoList task={task} func={this.deleteTask} complite={this.toggleComplete}  updateTask={this.updateTask}/>
    </div>
  );
}

}

export default App;
