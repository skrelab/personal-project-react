import React, { Component } from 'react';
import './App.css';
import { Login } from './Login';
import { Repository } from './Repository';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            forked: [], 
            pulls: [],
            authenticated: false,
            username: '',
        };
    
        // Bindings
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    // Lifecycle methods
    componentDidMount() {
        // console.log("Mounted!");
        // fetch('https://api.github.com/users/pkanal/events')
        fetch('https://api.github.com/users/pkanal/repos?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f') 
            .then(response => response.json())
            .then(data => {
                // console.log('Response from API call:', data)
                const forked = data.filter((datum) => {
                    if (datum.fork) {
                        return datum;
                    }
                });
                // console.log(forkedEvents);
                this.setState({
                    forked
                });
            })
    }

    // Methods
    handleOnChange(event) {
        // console.log(event.target.value);
        this.setState({
            username: event.target.value,
        });
    }

    handleOnSubmit(event) {
        event.preventDefault();
        if (this.state.username) {
            this.setState({
                authenticated: true,
            });
        }
    }
    
    render() {
        console.log('This is the App component', this.state);
        return (
            <div>
            { 
                this.state.authenticated? 
                <Repository forked={this.state.forked} pulls={this.state.pulls} />
                : 
                <Login onSubmit={this.handleOnSubmit} onChange={this.handleOnChange} username={this.state.username} />
            }
            </div>
    );
  }
}

export default App;
