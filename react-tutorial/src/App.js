// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// import CounterComponent from './components/Function Components/CounterComponent';
// import ShowHideComponent from './components/Function Components/ShowHideComponent';
import ListComponent from './components/Function Components/ListComponent';

// import CounterComponent from './components/ClassComponent/CounterComponent';
// import ShowHideComponent from './components/ClassComponent/ShowHideComponent';
// import LifeCycleComponent from './components/ClassComponent/LifeCycleComponent';
// import ListComponent from './components/ClassComponent/ListComponent';

import Home from './components/Routing/Home';
import About from './components/Routing/About';
import Contact from './components/Routing/Contact';
import Navbar from './components/Routing/Navbar';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className='text-center' >
      {/* <CounterComponent></CounterComponent>
      <ShowHideComponent></ShowHideComponent>
      <LifeCycleComponent></LifeCycleComponent>
      <ListComponent></ListComponent> */}

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home title="I am a Home Component"></Home>}></Route>
      </Routes>
      <Routes>
        <Route path='/about' element={<About title="I am a About Component"></About>}></Route>
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact title="I am a Contact Component"></Contact>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
