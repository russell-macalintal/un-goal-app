import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitLogin, submitLogout } from '../actions/loginActions';
import '../App.css'

class Home extends Component {
    state = {
        username: "",
        password: ""
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let user = this.state;
        this.props.submitLogin(user);
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className="home">
                <div class="container">

                <form class="form-signin" onSubmit={this.handleOnSubmit} >
                 <h2 class="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input id="username-input" type="text" name="username" class="form-control" value={this.state.username} onChange={this.handleOnChange} placeholder="Enter Email" required autofocus />

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="password-input" name="password" class="form-control" onChange={this.handleOnChange} value={this.state.password} placeholder="Enter Password" required />
                 <div class="checkbox">
  
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                
                </form>
                <div class='not-registered'>
                <Link to='/registration' >Not Registered? Click Here!</Link>                
                </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.userId,
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitLogin: user => dispatch(submitLogin(user)),
        submitLogout: () => dispatch(submitLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);