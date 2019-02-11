import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticate } from './store/actions/authenticate';
import { forkedFetchData } from './store/actions/forked';
import { pullsFetchData } from './store/actions/pulls';

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
        
        this.props.forkedFetchData('https://api.github.com/users/pkanal/repos?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f');
        this.props.pullsFetchData('https://api.github.com/users/pkanal/events?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f');
    }

    // Methods
    handleOnSubmit(event) {
        event.preventDefault();

        if (event.target.elements.username.value) {
            this.props.authenticate(true);
        }
    }
    
    render() {
        return (
            <div>
            { 
                this.props.isAuthenticated?
                <Repository 
                    forked={this.props.forked} 
                    pulls={this.props.pulls}
                    forkedHasErrored={this.props.forkedHasErrored}
                    forkedIsLoading={this.props.forkedIsLoading}
                    pullsHasErrored={this.props.pullsHasErrored}
                    pullsIsLoading={this.props.pullsIsLoading}
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
        forked: state.forked,
        forkedHasErrored: state.forkedHasErrored,
        forkedIsLoading: state.forkedIsLoading,
        pulls: state.pulls,
        pullsHasErrored: state.pullsHasErrored,
        pullsIsLoading: state.pullsIsLoading,
  };
}

const mapDispatchToProps = (dispatch) => ({ 
    authenticate: (bool) => dispatch(authenticate(bool)), 
    forkedFetchData: (url) => dispatch(forkedFetchData(url)), 
    pullsFetchData: (url) => dispatch(pullsFetchData(url)), 
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
