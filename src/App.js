import './App.css';
import Person from './container/person'
import React, { Component } from 'react';
import { Route, Routes,Switch } from 'react-router-dom'
import UserEdit from './container/UserEdit'
import CreateUser from './container/createUser'
import axios from 'axios'
import { connect } from 'react-redux'
import { creatAddPerson } from './redux/person_action'

class App extends Component {


  componentDidMount = () => {
   
    axios
      .get("http://localhost:8080/api/bears")
      .then(res => res.data.forEach((e) => { 
        e.display=true
        this.props.add(e) 
      }))

  
  }


  render() {

    return (
      <div>
        <Routes>
          <Route path='/' element={<Person />} />
          <Route path='/edit/:id' element={<UserEdit  />} /> 
          {/* data={{ firstName: 'asdasd', age: 13, lastName: 'asdasd', sex: 'asdasd', id: 13 }} */}
          <Route path='/register' element={<CreateUser />} />
        </Routes>


      </div>
    );
  }
}
export default connect(
  state => ({
    ppl: state.person,
  }
  ),
  {
    add: creatAddPerson
  }
)(App)

