import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticate } from './store/actions/authenticate';
import { forkedFetchData } from './store/actions/forked';
import { pullsFetchData } from './store/actions/pulls';

import { Login } from './components/Login';
import { Repository } from './components/Repository';


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
            this.props.authenticate();
        }
    }
    
    render() {

        let components = [];
        
        for (const key in this.props.data) {
            let value = this.props.data[key];
            components.push(<Repository dataType={key} data={value} />);
        }

        return (
            <div>
            { 
                this.props.isAuthenticated?
                <div>{components}</div> 
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
        data: {
            forked: state.forked,
            pulls: state.pulls, 
        }
  };
}

const mapDispatchToProps = (dispatch) => ({ 
    authenticate: () => dispatch(authenticate()), 
    forkedFetchData: (url) => dispatch(forkedFetchData(url)), 
    pullsFetchData: (url) => dispatch(pullsFetchData(url)), 
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
