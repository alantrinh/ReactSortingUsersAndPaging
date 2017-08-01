import { combineReducers } from 'redux';
import UsersReducer from './reducer_user.js';

const rootReducer = combineReducers({
    users: UsersReducer
});

export default rootReducer;
