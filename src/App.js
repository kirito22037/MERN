import React from 'react';
import './App.css';
import InputEle from './components/input_ele';
import ListDis from './components/list_dis';

class App extends React.Component
{
  
  render()
  {
    
    return (
      <div className="App">
        <InputEle/>
        <ListDis/>
      </div>
    )
  };
    
}

export default App;
