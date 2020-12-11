import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/">Clientes Cadastrados</Link>
                    <Link to="/">Cadastrar Clientes</Link>
                    <Link to="/">Login</Link>
                </nav>
            </div>
        );
    }
}

export default Header;
