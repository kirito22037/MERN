import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//----------state management through reducer
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers_store/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=>{
    //console.log("the store is rendered and its data : ");
    //console.log(store.getState().todoList);
});



ReactDOM.render(<Provider store={ store }><App/></Provider> , document.getElementById('root'));

serviceWorker.unregister();
