import React, { Component } from 'react';
import { Button, Grid, Cell, Textfield, List, ListItem, ListItemContent } from 'react-mdl'


export default class About extends Component {
    render() {
        return(
            <Grid>
            <Cell className="aboutPage" col={12}>
            <h1 className="message">About Me</h1>
            <Grid>
                <Cell col={6}>
                </Cell>
                <Cell col={6}>
                <div className="aboutBox">
                <p className="summary">Hi there! My name is Matthew Goldfine.  I am a web-developer based out of New York City.  My educational background has a strong emphasis on health and medicine, which makes sense because originally I planned on going to medical school.  It wasn't until the Summer before I was set to go that I decided that my true interests lie in technology and computers.  I began teaching myself programming and never looked back, realizing that I had made the correct decision.  What I love most about programming is that there are so many solutions to the same problem.  I like that a person can add their own flair to their code, making it unique to them in certain situations.  I am currently working as a web-developer at a start-up company called Hunter Digital, while learning new frameworks on my own time.  I have interests in fitness, cooking, health, gaming, and nature so I have many avenues to explore for future projects.  If you have made it this far, thank you for reading and feel free to contact me!</p>
                </div>
            </Cell>
            </Grid>
            </Cell>
            </Grid>
        )
    }
}