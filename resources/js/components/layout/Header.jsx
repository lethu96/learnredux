import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header id="page-header">
               <div  id = "header-bottom"  >
                    <nav id="main-nav">
                        <ul id="main-menu" className="clearfix">
                        <li className="current-menu-item"><Link to ='/' > Home </Link><span></span></li>
                        <li><Link to = '/list-user'>List </Link> </li>
                        <li><a href="#">Login</a><span></span></li>
                        <li><a href="#">Register</a><span></span></li>
                        </ul>
                    </nav>
               </div>
            </header>
        );
    }
}
 
