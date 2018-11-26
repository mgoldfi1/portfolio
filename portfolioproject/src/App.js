import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <div>
        <Layout fixedHeader>
        <Header className="header-color" title="PORTFOLIO">
        <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>

        </Header>
        <Content>
            <div className="page-content">
            <Main/>
            </div>
        </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
