import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/navbar';
import TextForm from './component/textform';
import {BrowserRouter as Router,
    Routes,
    Route,
   } from 'react-router-dom';

function App() {
  const[mode,setMode]=useState("white");//tell dark mode is on or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type,color)=>{
    setAlert({
mgs:message,
type:type,
color:color,
    })
    setTimeout(()=>
    setAlert(null),1500
    )
  }
  const toggle=()=>{
  if(mode==="white")
  {
    setMode("black");
    document.body.style.backgroundColor="black";
    showAlert("Dark mode has been enabled","success","red")
  }
  else{
    setMode("white");
    document.body.style.backgroundColor="white";
    showAlert("light mode enabled","success","green")
  }
 }
  return (
    <>
    <Router>
      <Navbar attribute1="Home" about="About"  toggler={toggle}/>
       <Alert alert={alert}/>
       <div className='ml-52 w-10/12 '>
       <Routes>
       <Route exact path='/' element={< TextForm heading="Enter text" mode={mode} showAlert={showAlert} />}></Route>
 <Route exact path='/about' element={< About showAlert={showAlert} />}></Route>
 </Routes>
 </div>
 </Router>
     </>
  );

}

export default App;