import React, { Component } from "react";
import './App.css';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";



class App extends Component
{


    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))

    }

    onSearchChange = (event) =>
    {
        this.setState({searchField: event.target.value});

    }
    render() {
        const { robots, searchField } = this.state;

        const filterRobots = robots.filter(robot =>{
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            }
        );

        if(robots.length===0)
        {
            return (
                <div className='tc ma7'>
                    <h1>LOADING...</h1>
                </div>);
        } else
        {
            return(
                <div>
                    <div className='tc' >
                        <h1>R o b o  F r i e n d s</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>

                </div>

            );
        }


    }
}

export default App;