import React, { Component } from "react";
import './App.css';
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import {robots} from "./models/robots";


class App extends Component
{

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }

    }

    onSearchChange = (event) =>
    {
        this.setState({searchField: event.target.value});

    }
    render() {
        const filterRobots = this.state.robots.filter(robot =>{
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        );

        return(
            <div>
                <div className='tc' >
                    <h1>R o b o  F r i e n d s</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <CardList robots={filterRobots}/>
            </div>

        );
    }
}

export default App;