import React, { Component } from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Resume1 from './components/Resume1';
import UserForm from './components/UserForm';

class App extends Component {

  
  
  render() {
    return (
      <>
      <Routes>
        <Route path='/resume1' element={<Resume1/>}>

        </Route>
      </Routes>
        <div>
          <div className="col-lg-8 mx-auto text-center mt-5">
            <h1><b>Let's generate your Resume!</b></h1>
            <p className="lead">Please provide accurate and clear description wherever necessary.</p>
            <hr />
          </div>  
          <UserForm/>
        </div>  
      </>
    );
  }
}

export default App;
