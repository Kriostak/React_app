import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import FacebookLogin from 'react-facebook-login'

import * as actionTypes from '../../store/actions'
import classes from './login.module.scss'

class Login extends Component {

    loginResponse = (response) => {
        this.props.history.push({
            pathname: '/posts'
        });
        console.log('res', response)
        this.props.loginResponse(response);
    }

    render() {
        console.log(this.props.login);
        const page = this.props.login ? 
            (<Redirect to='/posts' />) : 
            (<FacebookLogin
                appId="566899433790128"
                autoLoad={false}
                fields="name,picture"
                callback={this.loginResponse} />);

        return (<div className={classes.Login}>{page}</div>);
    }
    
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginResponse: (loginData) => dispatch({type: actionTypes.LOGIN, loginData: loginData})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);