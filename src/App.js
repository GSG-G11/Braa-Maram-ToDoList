import React ,{Component} from "react";
import AddToDo from "./component/AddToDo";
import ToDoList from "./component/ToDoList";
import { v4 as uuidv4 } from 'uuid';

 class App extends Component {

  state={
    task:[
      {id:uuidv4(),task:"create to do app",date:'4/4/2022',isComplite:false},
      {id:uuidv4(),task:"create components",date:'4/4/2022',isComplite:true}
    ],
  }
  getTasks = (item) => {
    item.id = uuidv4();
   const taskItem = this.state.task;
   taskItem.push(item);
  this.setState({task:taskItem})
  }

  toggleComplete=(index)=>{
const itemTask = [...this.state.task]
itemTask[index].isComplite = !itemTask[index].isComplite
this.setState({task:itemTask})
  }

deleteTask=(id)=>{
const taskList = this.state.task.filter((item)=>{
  return item.id !==id
})
this.setState({task:taskList})
}

render(){
  const {task} = this.state;
  return (
    <div className="App">
     <h3>to do list</h3>
     <AddToDo func={this.getTasks} />
     <ToDoList task={task} func={this.deleteTask} complite={this.toggleComplete} />
    </div>
  );
}

}

export default App;
