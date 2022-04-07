import React,{Component} from 'react';

class AddToDo extends Component {

    render(){
        const {handleChange,task,date,handleSubmit,edit} = this.props
        return (
            <div className='to-do-form'>
                <form onSubmit={handleSubmit}>
                    <input name="taskItem" value ={task} type="text" placeholder='your task' onChange={handleChange} required />
                    <input name="date" value ={date} type="text" placeholder='date' onChange={handleChange} required />
                    <button type='submit'> {edit?'Edit':'Add'}</button>
                </form>
            </div>
        );
    }
};
export default AddToDo;