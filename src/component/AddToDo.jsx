import React,{Component} from 'react';

class AddToDo extends Component {
  
    state={
        task:''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
       this.props.func(this.state);
       this.setState({task:''})
    }
    render(){
        const {task} = this.state;
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="task" value ={task} type="text" onChange={this.handleChange} />
                   <input type="submit" />
                </form>
            </div>
        );
    }
   
};

export default AddToDo;