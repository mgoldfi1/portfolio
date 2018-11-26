import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

export default class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="banner-text">
                    <h1>Full-Stack Web-Developer</h1>
                    <hr/>
                    <div className='social-links'>
                        <a href="http://github.com/mgoldfi1" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="http://linkedin.com/in/mgoldfine" target="_blank">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>  
                        <a href="https://angel.co/matthew-goldfine-1" target="_blank">
                        <i class="fa fa-angellist" aria-hidden="true"></i>
                        </a>               
                    </div>
                    <hr/>
                    </div>
                    <div className='icons'>
                    <img className="tech-icon" src={require('./images/html.png')} />
                    <img className="tech-icon" src={require('./images/react.png')} />
                    <img className="tech-icon" src={require('./images/redux.png')} />
                    <img className="tech-icon" src={require('./images/JavaScript.png')} />
                    <img className="tech-icon" src={require('./images/rails.png')} />
                    <img className="tech-icon" src={require('./images/rest-api.png')} />
                    <img className="tech-icon" src={require('./images/postgresql.png')} />
                    <img className="tech-icon" src={require('./images/node.png')} />
                    <img className="tech-icon" src={require('./images/Bootstrap-Logo.png')} />
                    </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}