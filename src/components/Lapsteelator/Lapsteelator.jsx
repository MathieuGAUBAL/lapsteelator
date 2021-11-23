import React, { Component } from 'react';
import NavBarHomePage from '../NavBarHompage/NavBarHomePage';
import './Lapsteelator.css';
import LapsteelModulePrincipal from './LapsteelModulePrincipal';
import Footer from './../footer/Footer';

class Lapsteelator extends Component {
    render() {
        return (
            <div>
                <NavBarHomePage />
                <LapsteelModulePrincipal />
                <Footer />
            </div>
        )
    }
}

export default Lapsteelator;