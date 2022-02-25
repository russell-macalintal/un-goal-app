import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-1 col-form-label">Email</label>
                <div class="col-sm-10">
                <input id="username-input" type="text" name="username" readonly class="form-control-plaintext" value={this.state.username} onChange={this.handleOnChange} placeholder="Enter Username" />
                </div>
                 </div>
                <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-1 col-form-label">Password</label>
                <div class="col-sm-10">
                 <input type="password" class="form-control" id="password-input" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Enter Password" />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Login</button>
                 </div>
                    </div>
                    
                </form>
                <Link to='/registration' >Not Registered? Click Here!</Link>
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