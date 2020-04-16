//middleware action before the action is send we fetch data
//1.middleware action is dispatched/called by the mapDispatchToProps
//2.then data is fetched 
//3.now the reall action is dispatched
import $ from 'jquery';

export const allTodo=()=>{
    return(dispatch ,getState)=>{
        $.ajax({
            type : 'GET',
            url : '/todo/all',
            contentType : 'application/json',
            success : (result, status)=>{
                
                let alldata = (result.map((todo)=>{
                    return {
                        id : todo._id,
                        data : todo.data,
                        status : todo.status
                    }
                }));
                //console.log("the result from ajax : ",alldata);
                dispatch({type : 'ALL_TODO' , data : alldata});
                return alldata;
            },
            error : (xhr , status , error)=>{
                dispatch({type : 'ERROR'});
                return error;
            }
        })
    }
};

export const addTodo = (data)=>{
    return (dispatch ,getState)=>{
        //make asyn req
        $.ajax({
            type : 'POST',
            url:'/todo/new',
            contentType : "application/json",
            data : JSON.stringify({
                                    data : data, 
                                    status : false
                                }),
            success : (result , status)=>{
                dispatch({type:'ADD_TODO', data : result});
                return result;
            },
            error : (xhr , status ,error)=>{
                dispatch({type : 'ERROR'})
                return error;
            }
        });



        //dispatch({type:'ADD_TODO', data});
    }
};

export const handleClick = (id)=>{
    return(dispatch , getState)=>{
    $.ajax({
        type : 'PUT',
        contentType: 'application/json',
        url:'/todo/update/'+id,
        success : (result ,status)=>{
            //console.log("after the status is changed data : ",result);

            dispatch({type:'UPDATE_STATUS' , data: result});
            return result;
        },
        error : (xhr , status , error)=>{
            dispatch({type:'ERROR'});
        }
    })
    }
};

export const handleCross = (id)=>{
    return(dispatch ,getState)=>{
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',
            url: '/todo/delete/'+id,
            success : (result, status)=>{
                //console.log("the deleted one is : ",result);

                dispatch({type:'DELETE_TODO' , data : id});
                return result;
            },
            error : (xhr , status , error)=>{
                dispatch({type : 'ERROR'});
            }
        })
    }
}