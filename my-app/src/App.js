import React, { Component } from 'react';
import './App.css';
import { Login } from './Login';
import { Repository } from './Repository';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            authenticated: false,
            username: '',
            password: '', 
        };
    
        // Bindings
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
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
        // console.log('This is the App component', this.state);
        return (
            <div>
            { 
                this.state.authenticated? 
                <Repository events={this.props.events} pulls={this.props.pulls} />
                : 
                <Login onSubmit={this.handleOnSubmit} onChange={this.handleOnChange} username={this.state.username} />
            }
            </div>
    );
  }
}

export default App;
