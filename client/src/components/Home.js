import React, { Component } from 'react';

class Home extends Component {
    state = {
        username: "",
        password: ""
    }

    submitLogin = (user) => {
        configObj = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.submitLogin(this.state);
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

export default Home;