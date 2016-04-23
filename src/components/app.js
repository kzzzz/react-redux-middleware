import React from 'react';
import {Component} from 'react';
import Users from './Users.jsx';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Users</h1>
                <Users />
            </div>
        );
    }
}
