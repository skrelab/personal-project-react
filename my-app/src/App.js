import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticate } from './store/actions/authenticate';
import { fetchForked } from './store/actions/forked';
import { fetchPulls } from './store/actions/pulls';

import { Login } from './components/Login';
import { Listing } from './components/Listing';


class App extends Component {
    constructor(props) {
        super(props);
    
        // Bindings
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    // Lifecycle methods
    componentDidMount() {
        
        this.props.fetchForked('https://api.github.com/users/pkanal/repos?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f');
        this.props.fetchPulls('https://api.github.com/users/pkanal/events?access_token=e6c468b2a0661da2aec13b5e2c32ad288b178e6f');
    }

    // Methods
    handleOnSubmit(event) {
        event.preventDefault();

        if (event.target.elements.username.value) {
            this.props.authenticate();
        }
    }
    
    render() {
        
        const components = Object.keys(this.props.data).map((property, index) => {
            let value = this.props.data[property];
            return <Listing key={index} dataType={property} data={value} />;
        })

        return (
           <React.Fragment>
           { 
               this.props.isAuthenticated?
               <div>
                   <h1 className="mb-4">Welcome to the Repository</h1>
                   {components}
               </div>
               : 
               <Login onSubmit={this.handleOnSubmit} /> 
           }
           </React.Fragment>
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
    fetchForked: (url) => dispatch(fetchForked(url)), 
    fetchPulls: (url) => dispatch(fetchPulls(url)), 
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
