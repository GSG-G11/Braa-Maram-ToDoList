import React,{Component} from 'react';

class AddToDo extends Component {
  constructor(props){
super(props)

this.state={
    task:'',
    date:props.taskEdit ? props.taskEdit.date : ''
}
  }
  

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
       this.props.func(this.state);
       this.setState({task:'',date:''})
    }
    render(){
        const {task,date} = this.state;
        console.log(this.props,"helllllo");
        return (
            <div className='to-do-form'>
                <form onSubmit={this.handleSubmit}>
                    <input name="task" value ={this.props.taskEdit ? this.props.taskEdit.task : task} type="text" onChange={this.handleChange} required />
                    <input name="date" value ={this.props.taskEdit ? this.props.taskEdit.date : date} type="datetime-local" onChange={this.handleChange} required />
                   <input type="submit" />
                </form>
            </div>
        );
    }
};
// new Date(taskEdit.date).toISOString()
export default AddToDo;