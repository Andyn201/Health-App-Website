import {combineReducers} from 'redux';
import alert from './alert/alert.reducer';
import auth from './auth/auth.reducers';
import log from './log/log.reducers';
import posts from './posts/posts.reducers';
import admin from './admin/admin.reducers';
//import UserReducer from './UserReducer'

export default combineReducers({
    admin,
    alert,
    auth,
    log,
    posts
});