import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled !", 'success');
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='Textutil is amazing';
      // },2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled !", 'success');
      document.title = 'TextUtils - Light Mode';
      // setInterval(()=>{
      //   document.title='Install textUtil now';
      // },2000);
    }
  }
//   return (
//     <>
//       <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         <Router>
//         <Switch>
//           <Route path='/about'>
//             <About />
//           </Route>
//           <Route path='/'>
//             <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
//           </Route>
//         </Switch>
       
// </Router>
// </div>
      
//     </>
//   );
return (
  <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      {/* <Router> */}
        {/* In react-router-dom version 6, the Switch component is replaced with Routes, and the usage is slightly different. */}
        <Routes>
          <Route exact path='/about' element={<About  mode={mode}/>} />
          <Route exact path='/' element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
        </Routes>
      {/* </Router> */}
    </div>
  </>
);

}

export default App;
