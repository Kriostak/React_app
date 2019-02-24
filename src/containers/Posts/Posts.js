import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import PostItem from '../../components/PostItem'
import Header from '../../components/Header'

import * as actionTypes from '../../store/actions'

class Posts extends Component {

    render() {
        console.log('posts props', this.props)
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        visitPost: (postID) => dispatch({type: actionTypes.VISIT_POST, postsID: postID})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);