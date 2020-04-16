import React from 'react';
import './input_css.css';
import { connect } from 'react-redux';  //contains method like dispatch / connect the store from Provide at index.js
import { addTodo } from '../actions/asyncActions';
//import ListDis from './list_dis';

class InputEle extends React.Component
{
    constructor(props)
    {
        super(props);
    };

    handleEnter=(e)=>{

        if(e.key === 'Enter')
        {
            const todo = e.target.value;
            //console.log("the todo recieved : ",todo);
            this.props.addTodo(todo);
            e.target.value = '';
        }
    }

    render()
    {
        return(
        <React.Fragment>
            
            
            <input className="form-control cssInp" 
            type="text" 
            onKeyDown={this.handleEnter}
            placeholder="next task"/>
            

        </React.Fragment>)
        
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        addTodo : (data)=>dispatch(addTodo(data))
    }
};


export default connect(null, mapDispatchToProps)(InputEle);