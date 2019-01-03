import React, {Component} from 'react'
import Header  from './Header'
import Footer from './Footer'

export default class Home  extends Component {
    render () {
        return (
            <div>
            <Header />
            <div id="main-content">
               {this.props.children}
            </div>
            <Footer /> 
            </div>
        );
    }
}