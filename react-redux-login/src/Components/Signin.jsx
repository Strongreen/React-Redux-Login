import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
    render() {
        return (
            <div>
                <img src="" alt=""/>
                <form>
                    <label htmlFor="email" >
                        Email: 
                        <input type="email" name="email" />
                    </label>
                    <label htmlFor="password" >
                        Password: 
                        <input type="password" name="password" />
                    </label>
                    <button type="submit"><Link to="/client-registered">Login</Link></button>
                </form>
            </div>
        );
    }
}

export default Signin;
