import React, { Component } from 'react';
import '../css/user.css'
import { Link} from 'react-router-dom'
class User extends Component {

    updateUser = (id) => {
        return () => {
            // console.log(id);
            // const newObj = { firstName: 'steven', age: '321', lastName: 'zhao', sex: 'male', id: nanoid() }
            // const addPpl = this.props.addPpl
            // addPpl(newObj)
           
        }

    }

    deleteUser = (id) => {
        return () => {
            console.log(id);
            this.props.delAsync(id)
        }
    }

    render() {
        const user = this.props
        let url='/edit/' + user.id
        return (    
            <div>
                <ul className="user-list">
                    <li><Link  to={url}>Edit</Link></li>
                    <li><button onClick={this.deleteUser(this.props.id)}>Delete</button></li>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.sex}</li>
                    <li>{user.age}</li> 
                </ul>
             
                    
               
           
            </div>
        );
    }
}

export default User;