import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import SubMenu from './SubMenu';
import ClientTable from './ClientTable';
import Footer from './Footer';

class ClientRegistered extends Component {
    render() {
        return (
            <div>
                <Header />
                <SubMenu />
                <ClientTable />
                <button><Link to="/register-client">Cadastrar Cliente</Link></button>
                <Footer />
            </div>
        );
    }
}

export default ClientRegistered;
