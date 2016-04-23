import * as actionType from './types';
import axios from 'axios';

export function fetchUsers() {
    var request = axios.get('http://jsonplaceholder.typicode.com/users');
    return {
        type: actionType.FETCH_USERS,
        payload: request
    }
}