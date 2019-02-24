import React, { Component } from 'react'

import classes from './Header.module.scss'

export default class Header extends Component {
    render() {
        return (
            <header className={classes.Header}>
                <div className={classes.Logo}>
                    <img src={this.props.img} />
                </div>
                <div className={classes.Username}>
                    {this.props.username}
                </div>

                <div className={classes.Signout} onClick={this.props.signout}>
                    Sign Out
                </div>
            </header>
        )
    }
}
