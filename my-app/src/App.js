import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticate } from './store/actions/authenticate';
import { fetchData } from './store/actions/data';

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
        
        const reposEndpoint = 'https://api.github.com/users/pkanal/repos?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f';
        const eventsEndpoint = 'https://api.github.com/users/pkanal/events?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f';

        this.props.fetchData(reposEndpoint, eventsEndpoint);
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
                <Repository 
                    // forked={this.props.forked} 
                    // pulls={this.props.pulls}
                    // forkedHasErrored={this.props.forkedHasErrored}
                    // forkedIsLoading={this.props.forkedIsLoading}
                    // pullsHasErrored={this.props.pullsHasErrored}
                    // pullsIsLoading={this.props.pullsIsLoading}
                    data={this.props.data}
                /> 
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
        // forkedHasErrored: state.forkedHasErrored,
        // forkedIsLoading: state.forkedIsLoading,
        // pulls: state.pulls,
        // pullsHasErrored: state.pullsHasErrored,
        // pullsIsLoading: state.pullsIsLoading,
        data: state.data
  };
}

const mapDispatchToProps = (dispatch) => ({ 
    authenticate: () => dispatch(authenticate()), 
    fetchData: (url1, url2) => dispatch(fetchData(url1, url2)), 
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
