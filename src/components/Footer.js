import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="gContainer">
                <div className='footerContainer'>
                    <p id="footerName">Agustín Gallego</p> 
                    <a target="on_blank" href="https://www.linkedin.com/in/agustin-gallego-741653200/"><p className='link'>LinkedIn</p></a>
                    <p className="separator">|</p>
                    <a target="on_blank" href="https://github.com/gallegoagustin"><p className='link'>GitHub</p></a>
                </div>
            </div>
        );
    }
}

export default Footer;