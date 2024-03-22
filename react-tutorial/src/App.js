// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// import CounterComponent from './components/Function Components/CounterComponent';
// import ShowHideComponent from './components/Function Components/ShowHideComponent';
import CounterComponent from './components/ClassComponent/CounterComponent';
import ShowHideComponent from './components/ClassComponent/ShowHideComponent';
import LifeCycleComponent from './components/ClassComponent/LifeCycleComponent';

function App() {

  return (
    <div className='text-center' >
      <CounterComponent></CounterComponent>
      <ShowHideComponent></ShowHideComponent>
      <LifeCycleComponent></LifeCycleComponent>

    </div>
  );
}

export default App;
