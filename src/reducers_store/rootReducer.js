import $ from 'jquery';

let initState={
    
    todoList : []
};


const rootReducer = (state=initState , action)=>{
    //console.log("rootreducer is called");

    if(action.type==='ADD_TODO')
    {
        //console.log("action type : ",action.type);
        return {
            todoList : [...state.todoList, action.data]
        }
    }

    else if(action.type==="ALL_TODO")
    {
        //console.log("all data : ",action.data);
        //console.log("store data : ",state.todoList)
        //const data = 
        return{
            todoList : [ ...action.data ]
        }
    }

    else if(action.type==="UPDATE_STATUS")
    {
        let updatedTodo = state.todoList.map(ele=>{
            if(ele.id===action.data._id)
            {
                return {
                    ...ele,
                    status : action.data.status
                }
            }
            return ele;
        });

        return {
                todoList : updatedTodo
        }
    }

    else if(action.type === 'DELETE_TODO')
    {
        let updatedTodo = state.todoList.filter(ele=>{
            return ele.id!=action.data
        });

        return {
            todoList : updatedTodo
        }
    }

    else
    return state;
};

export default rootReducer;