import React from 'react'
import About from './about'
import Landing from './landing'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'
import { Switch, Route } from 'react-router-dom'


const Main = () => {
    return(
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    </Switch>
    )
}

export default Main;