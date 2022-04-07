import React,{Component} from 'react';

class AddToDo extends Component {

    state={
        task:'',
        date:''
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
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="task" value ={task} type="text" onChange={this.handleChange} required />
                    <input name="date" value ={date} type="datetime-local" onChange={this.handleChange} required />
                   <input type="submit" value='add' />
                </form>
            </div>
        );
    }
};

export default AddToDo;