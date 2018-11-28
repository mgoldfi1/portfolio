import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        }
    }

    toggleTab = () => {
        if (this.state.currentTab === 0) {
            return (
                <div className='projects-grid'>
                <Card shadow={5} style={{width: '30%', height: '30%', margin: '20px', background: 'url(https://static1.squarespace.com/static/55c8e052e4b01bd89f02a45e/t/568ef1b2bfe8736dee55ce43/1452208563815/?format=1000w) center / cover'}}>
                <CardTitle style={{color: 'black', height: '176px'}}>NFL Pickems</CardTitle>
                <CardText style={{color: 'black'}}>
                    This react project uses an NFL API to gather season and match data and create a competitive user-based pick system in which users can compete against their friends.
                </CardText>
                <CardActions border>
                <a href='https://github.com/RickySauce/NFl-Pickems' target="_blank"><Button colored> GitHub</Button></a>
                </CardActions>
                </Card>
                  <Card shadow={5} style={{ width: '30%', height: '30%', margin: '20px', background: 'url(https://static1.squarespace.com/static/55c8e052e4b01bd89f02a45e/t/568ef1b2bfe8736dee55ce43/1452208563815/?format=1000w) center / cover'}}>
                  <CardTitle style={{color: 'black', height: '176px'}}>MOVIEDIARY</CardTitle>
                  <CardText style={{color: 'black'}}>
                      This react/redux project is a simple web-application that allows users to review movies, and interact with other users.
                  </CardText>
                  <CardActions border >
                  <a href='https://github.com/RickySauce/NFl-Pickems' target="_blank"><Button colored> GitHub</Button></a>
                  </CardActions>
                  </Card>
                  <Card shadow={5} style={{width: '30%', height: '30%', margin: '20px', background: 'url(https://static1.squarespace.com/static/55c8e052e4b01bd89f02a45e/t/568ef1b2bfe8736dee55ce43/1452208563815/?format=1000w) center / cover'}}>
                  <CardTitle style={{color: 'black', height: '176px'}}>SLEEPAWAYCAMPER</CardTitle>
                  <CardText style={{color: 'black'}}>
                  A web-application for a bi-directional sourcing of either camps or campers.  Uses Node, Express, React, Redux, PostgreSQL, Sequelize
                  </CardText>
                  <CardActions border >
                  <a href='https://github.com/RickySauce/NFl-Pickems' target="_blank"><Button colored> GitHub</Button></a>
                  </CardActions>
                  </Card>
                  <Card shadow={5} style={{width: '30%', height: '30%', margin: '20px', background: 'url(https://static1.squarespace.com/static/55c8e052e4b01bd89f02a45e/t/568ef1b2bfe8736dee55ce43/1452208563815/?format=1000w) center / cover'}}>
                  <CardTitle style={{color: 'black', height: '176px'}}>WEATHER TRACKER</CardTitle>
                  <CardText style={{color: 'black'}}>
                  A simple React application that uses an external weather-api to track local forecasts and display JSON data in a styled display.
                  </CardText>
                  <CardActions border >
                  <a href='https://github.com/mgoldfi1/weather2' target="_blank"><Button colored> GitHub</Button></a>
                  </CardActions>
                  </Card>
                  </div>
            )
        } else if (this.state.currentTab === 1) {
            return (
                <div className="projects-grid"> 
                 <Card shadow={5} style={{width: '30%', height: '30%', margin: '20px', background: 'url(https://www.bleepstatic.com/content/hl-images/2017/03/09/JavaScript.jpg) center / cover'}}>
                  <CardTitle style={{color: 'black', height: '176px'}}>DIET-TRACKER</CardTitle>
                  <CardText style={{color: 'black'}}>
                  This application uses jQuery to create a diet-tracker.  It uses a rails backend to persist user data, comments, and posts.  
                  </CardText>
                  <CardActions border >
                  <a href='https://github.com/mgoldfi1/jqueryproject' target="_blank"><Button colored> GitHub</Button></a>
                  </CardActions>
                  </Card>
                </div>
            )
        } else if (this.state.currentTab === 2) {
            return ( 
                <div className="projects-grid">
                  <Card shadow={5} style={{width: '30%', height: '30%', margin: '20px', background: 'url(https://ox4zindgwb3p1qdp2lznn7zb-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/ruby-logo.png) left / cover'}}>
                  <CardTitle style={{color: 'black', height: '176px'}}>TICKETWIZ</CardTitle>
                  <CardText style={{color: 'black', fontWeight: 'bold'}}>
                    A ruby on rails application that incorporates Oauth2 to allow users to buy tickets to upcoming movie showings. 
                  </CardText>
                  <CardActions border >
                  <a href='https://github.com/mgoldfi1/rails-project' target="_blank"><Button colored> GitHub</Button></a>
                  </CardActions>
                  </Card>
                  <Card shadow={5} style={{width: '30%', height: '30%', margin: '20px', background: 'url(https://ox4zindgwb3p1qdp2lznn7zb-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/ruby-logo.png) left / cover'}}>
                  <CardTitle style={{color: 'black', height: '176px'}}>IMDBScraper</CardTitle>
                  <CardText style={{color: 'black', fontWeight: 'bold'}}>
                    A CLI application that uses Ruby and nokogiri to scrape the popular IMDB website, and return current releases and future releases along with information about them. 
                  </CardText>
                  <CardActions border >
                  <a href='https://github.com/mgoldfi1/IMDBMoviescraper' target="_blank"><Button colored> GitHub</Button></a>
                  </CardActions>
                  </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
            <Tabs currentTab={this.state.currentTab} onChange={(tabId) => this.setState({ currentTab: tabId})} ripple>
                <Tab id='1'> React/Redux </Tab>
                <Tab id='2'>JavaScript/jQuery</Tab>
                <Tab id='3'>Ruby on Rails</Tab>
            </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleTab()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}