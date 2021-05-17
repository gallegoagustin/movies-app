import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
    render() {
        return (
            <div id="aboutGContainer">
                <div className="aboutSectionContainer">
                    <div><p>This App was built using ReactJS-Redux technologies and pure CSS in order to improve my development skills.
                        <br/><br/>
                        You will be able to look for information about any movie or serie you want and add them to your favorites list.
                        <br/><br/>
                        You can also try the mobile version!
                        <br/><br/>
                        If you want to know more about my works you can access to my social networks linked below.</p></div>
                    <div><Link to='/'><p id="aboutHome" className="link">Home</p></Link></div>
                </div>
            </div>
        );
    }
}

export default About;