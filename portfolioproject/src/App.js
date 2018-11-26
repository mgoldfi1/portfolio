import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl'
import Main from './components/main'


class App extends Component {
  render() {
    return (
        <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title="Hello">
        <Navigation>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
            </Navigation>

        </Header>
        <Content>
            <div className="page-content"/>
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
