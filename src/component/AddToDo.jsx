import React,{Component} from 'react';

class AddToDo extends Component {

    render(){
        const {handleChange,task,date,handleSubmit} = this.props
        return (
            <div className='to-do-form'>
                <form onSubmit={handleSubmit}>
                    <input name="taskItem" value ={task} type="text" placeholder='your task' onChange={handleChange} required />
                    <input name="date" value ={date} type="text" placeholder='date' onChange={handleChange} required />
                    <button type='submit'> Add</button>
                </form>
            </div>
        );
    }
};
// new Date(taskEdit.date).toISOString()
export default AddToDo;