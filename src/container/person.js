import React, { Component } from 'react';
import { connect } from 'react-redux'
import { creatAddPerson, registerPerson, deletePerson, initState, changeDisplay } from '../redux/person_action'
import User from './user'
import { Link } from 'react-router-dom'
import '../css/person.css'



class Person extends Component {

    seachInfo = (e) => {
        const { value } = e.target

        const person = this.props.ppl

        let filterFirstName = person.filter(item => item.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        let filterLastName = person.filter(item => item.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1)

        let filterList = [...filterFirstName, ...filterLastName]

        this.props.changeDis(filterList)

    }

display=() => {
    console.log('wahaha');
}


    render() {


        return (
            <div>
                <div>
                    Search: <input type="text" placeholder="Please enter the name you want" onChange={this.seachInfo} />
                </div>
                <ul className='header'>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li onClick={this.display}>First Name</li>
                    <li>Last Name</li>
                    <li>Sex</li>
                    <li>Age</li>
                </ul>
                {
                    this.props.ppl.map((p) => {
                        if (p.display)
                            return <li key={p.id}><User {...p} addPpl={this.props.addAsync} delAsync={this.props.delAsync} /></li>
                    })
                }

                <div>
                    
                    <button>Last Page</button>
                    <button>Next Page</button>
                    <Link to='/register'>Registe</Link>
                    
                </div>

            </div>
        )
    }
}

export default connect(
    state => ({
        ppl: state.person,

    }
    ),
    {
        addPpl: creatAddPerson,
        addAsync: registerPerson,
        delAsync: deletePerson,
        reset: initState,
        changeDis: changeDisplay
    }
)(Person)
