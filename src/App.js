import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { render } from '@testing-library/react';
import { updateUser } from './Actions/user-actions'
import { bindActionCreators } from 'redux';

class App extends Component {

  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }


  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit thussss <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div onClick={this.onUpdateUser}>
          Update User!! {this.props.user}
        </div> 
        <input onChange={this.onUpdateUser}/>
      </header>
    </div>)
  }
}

const mapStateToProps = (state , props) => {
  
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProp}`
  }
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators ({
    onUpdateUser: updateUser
  }, dispatch)
}

//const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  
//  console.log(propsFromState);
//  console.log('-------');
//  console.log(propsFromDispatch);
//  console.log('-------');
//  console.log(ownProps);
//  console.log('-------');

//  return {

//  }
// }

// export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
export default connect(mapStateToProps, mapActionsToProps)(App);
