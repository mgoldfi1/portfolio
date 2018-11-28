import React, { Component } from 'react';
import { Button, Grid, Cell, Textfield } from 'react-mdl'


export default class Contact extends Component {
    render() {
        return(
            <div>
                <Grid className="contact-grid">
                    <Cell className="contact-cell" col={6}>
                    <h1 className="message">Send Me a Message</h1>
                    <Textfield label="Name" style={{width: '400px'}}/>
                    <br/>
                    <Textfield label="Phone" style={{width: '400px'}}/>
                    <br/>
                    <Textfield label="Message" rows={3} style={{width: '400px'}}/>
                    <br/>
                    <Button  style={{opacity: '1.0'}} onMouseEnter={(event) => {event.target.style.opacity = 0.5}} onMouseLeave={(event) => {event.target.style.opacity = 1}} raised accent ripple>SEND</Button>
                    </Cell>
                    <Cell col={6}>
                    <h1 className="message">Contact Me</h1>
                    </Cell>
                </Grid>
            </div>
        )
    }
}