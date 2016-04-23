import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Users extends React.Component {
    constructor(props){
        super(props);

        this.props.fetchUsers();
    }

    renderUser(user) {
        return (
            <li key={user.id}>
                <span>{user.name}</span>
            </li>)
    }

    render() {
        return (
            <ul>
                {this.props.users.map(this.renderUser)}
            </ul>)

    }
}

function mapStateToProps(state){
    return{
        users: state.users || []
    }
}

export default connect(mapStateToProps, actions)(Users);