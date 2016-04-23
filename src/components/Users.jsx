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
            <div key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.company.name}</p>
                <p>Something else</p>
            </div>)
    }

    render() {
        return (
            <div className="well well-lg">
                <div className="">
                    {this.props.users.map(this.renderUser)}
                </div>
            </div>)

    }
}

function mapStateToProps(state){
    return{
        users: state.users || []
    }
}

export default connect(mapStateToProps, actions)(Users);