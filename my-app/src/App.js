import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticate } from './store/actions/authenticate';
import { forkedFetchData } from './store/actions/forked';

import { Login } from './Login';
import { Repository } from './Repository';


class App extends Component {
    constructor(props) {
        super(props);
    
        // Bindings
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    // Lifecycle methods
    componentDidMount() {
        
        this.props.fetchData('https://api.github.com/users/pkanal/repos?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f');
        // fetch('https://api.github.com/users/pkanal/repos?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f') 
        //     .then(response => response.json())
        //     .then(data => {
        //         const forked = data.filter(datum => {
        //             if (datum.fork) {
        //                 return datum;
        //             }
        //         });
 
        //         this.props.onForkedReceived(forked);

        //         fetch('https://api.github.com/users/pkanal/events?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f')
        //             .then(response => response.json())
        //             .then(data => {
        //                 const events = data.reduce((categorizedEvents, currentEvent) => {   
        //                     return Object.assign(
        //                         categorizedEvents,
        //                         { [currentEvent.type]: [...(categorizedEvents[currentEvent.type] || []), currentEvent] }
        //                     ); 
        //                 }, []); 

        //                 this.props.onPullsReceived(events.PullRequestEvent);

        //             })
        //     })
        //     .catch(error => console.error('Error:', error));
    }

    // Methods
    handleOnSubmit(event) {
        event.preventDefault();

        if (event.target.elements.username.value) {
            this.props.authenticate();
        }
    }
    
    render() {
        return (
            <div>
            { 
                this.props.isAuthenticated?
                // <Repository forked={this.props.forked} pulls={this.props.pulls} /> 
                <Repository forked={this.props.forked} /> 
                : 
                <Login onSubmit={this.handleOnSubmit} /> 
            }
            </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authenticated, 
        // forked: state.forked,
        // pulls: state.pulls
        forked: state.forked,
        hasErrored: state.forkedHasErrored,
        isLoading: state.forkedIsLoading
  };
}

const mapDispatchToProps = (dispatch) => ({ 
    authenticate: () => dispatch(authenticate()), 
    // onForkedReceived: (data) => dispatch(onForkedReceived(data)),
    // onPullsReceived: (data) => dispatch(onPullsReceived(data))
    fetchData: (url) => dispatch(forkedFetchData(url)), 
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
