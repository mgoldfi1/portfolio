import React, { Component } from 'react';
import { Button, Grid, Cell, Textfield, List, ListItem, ListItemContent } from 'react-mdl'


export default class About extends Component {
    render() {
        return(
            <Grid>
            <Cell className="aboutPage" col={12}>
            <h1 className="message">About Me</h1>
            <Grid>
                <Cell className="leftCell" col={6}>
                <img className="facePic"  src={require('./images/cutmypic.png')} />
                <div className="underPic">
                    <div className="info">Location: New York City</div>
                    <div className="info">Phone: (917) 846-9577</div>
                </div>
                </Cell>
                <Cell col={6}>
                <div className="aboutBox">
                <p className="summary">Hi there!  My name is Matthew Goldfine.  I am a  24 year old web-developer based out of New York City.  My educational background has a strong emphasis on health and medicine because originally my goal in life was to become a doctor.  I graduated from Binghamton University in 2016, ready to continue my education in medicine.  It wasn't until the Summer before I was set to go that I decided that my interests lie in technology and computers. Having grown up as an avid gamer and video editor, I believe this is what makes me the most happy.  I began teaching myself programming and never looked back, realizing that I had made the correct decision.  What I love most about programming is that there are so many solutions to the same problem.  I like that a person can add their own flair to their code, making it unique and personal.  I am currently working as a web-developer at a start-up company called Hunter Digital, while learning new frameworks on my own time. Currently, I am looking for a full-time position as a web-developer to continue to strengthen my skills.   I have interests in fitness, cooking, health, gaming, and nature so I have many avenues to explore for future projects.  If you have made it this far, thank you for reading and feel free to contact me!</p>
                </div>
            </Cell>
            </Grid>
            </Cell>
            </Grid>
        )
    }
}