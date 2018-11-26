import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl'

export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        }
    }

    render() {
        return(
            <div className="category-tabs">
            <Tabs currentTab={this.state.currentTab} onChange={(tabId) => this.setState({ currentTab: tabId})} ripple>
                <Tab> React/Redux </Tab>
                <Tab>JavaScript/jQuery</Tab>
                <Tab>Ruby on Rails</Tab>
            </Tabs>
            </div>
        )
    }
}