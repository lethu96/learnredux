
import {RECIVE_LIST_USER, REQUEST_ADD_USER} from '../config/user';

export default (state = {}, action) => {
    switch (action.type) {
        case RECIVE_LIST_USER:
            return action.data;
        case REQUEST_ADD_USER:
            return action.us
        default:
            return state;
    }
}