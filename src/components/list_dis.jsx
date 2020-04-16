import React from 'react';
import './list_css.css';
import { connect } from 'react-redux';
import { handleClick , allTodo , handleCross} from '../actions/asyncActions';

class ListDis extends React.Component
{
    constructor(props)
    {
        super(props);
    };

    
    hoverEffect1(e) {
        e.target.style.background = "rgba(0,0,0,0.4)";
        e.target.style.color = 'white'
      }
    hoverEffect2(e) {
        e.target.style.background = '';
        e.target.style.color = ''
      }

    completedstyle={
        fontStyle : "italic",
        color : "grey",
        textDecoration : "line-through"
    };

    componentDidMount()
    {
        //console.log("comonent loaded -------------");
        this.props.allTodo();
    }

    render()
    {
        //console.log("element list_display re-render");
        //console.log("the todolist is : ",this.props.todoList);
            
        return(
        <div className="flexCont">
        <ul style={{listStyle : "none" , padding : '0' }}>
                {
                    this.props.todoList.map(lis => {
                                                     
                                                        return(<React.Fragment key={lis.id+'kk'}>
                                                                    <li className="lisDiv" key={lis.id}> 
                                                                            <div
                                                                            key={lis.id+'a'} 
                                                                            onMouseEnter={ this.hoverEffect1 } 
                                                                            onMouseLeave={ this.hoverEffect2 } 
                                                                            onClick={ () => this.props.handleclick(lis.id) } 
                                                                            style={ lis.status === true ? this.completedstyle : null }
                                                                            className="alert alert-secondary lisCss">
                                                                                <p>{lis.data}</p>  
                                                                            </div>

                                                                            <button 
                                                                            key={lis.id+'b'}
                                                                            className="btn btn-secondary btnCss"
                                                                            key={lis.id+'b'}
                                                                            onClick={ () => this.props.handlecross(lis.id) }>
                                                                            {"\u00D7"}
                                                                            </button>                          
                                                                    
                                                                    </li>
                                                                
                                                                </React.Fragment>)
                                                     
                                                    }
                                            )
                }
        </ul>
        </div>)
                 
            
    }
};

const mapStateToProps = (state ,ownProp)=>{
    return{
        todoList : state.todoList
}};

const mapDispatchToProps = (dispatch)=>{
    return{
        handleclick : (id)=>{
            dispatch(handleClick(id));
        },
        handlecross : (id)=>{
            dispatch(handleCross(id));
        },
        allTodo : ()=>{
            dispatch(allTodo());
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ListDis);