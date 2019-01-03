import React,  {Component} from 'react'

export default class Footer extends Component {

    render() {
        return  (
            <footer id="page-footer">
            	<nav id="footer-nav">
                	<ul id="footer-menu" className="clearfix">
                    	<li><a href="#">Xin chao</a></li>
                        <li><a href="#">Day</a></li>
                        <li><a href="#">La</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">test</a></li>
                    </ul>
                </nav>
            </footer>
        );
    }
}