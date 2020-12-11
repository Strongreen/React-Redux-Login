import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterClient extends Component {
    render() {
        return (
            <div>
                <form>
                     <label htmlFor="name" >
                         Name:
                         <input name="name" type="text" />
                     </label>
                     <label htmlFor="age" >
                         Idade: 
                         <input name="age" type="number" />
                     </label>
                     <label htmlFor="email" >
                         Email
                         <input name="email" type="email" />
                     </label>
                     <button><Link>Register</Link></button>
                </form>
            </div>
        );
    }
}

export default RegisterClient;
