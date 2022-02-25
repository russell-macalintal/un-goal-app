import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLogin, submitLogout } from '../actions/loginActions';

class Home extends Component {
    state = {
        username: "",
        password: ""
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.submitLogin(this.state);
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className="home">
                <div>APPLICATION NAME</div>
                <form onSubmit={this.handleOnSubmit}>
                    <input id="username-input" type="text" name="username" onChange={this.handleOnChange} value={this.state.username} placeholder="Enter Username"/>
                    <input id="password-input" type="text" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Enter Password"/>
                    <input className="button" type="submit" value="Login"/>
                </form>
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