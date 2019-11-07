import { combineReducers } from "redux";
import auth from "./auth";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: auth,
    firestore: firestoreReducer
});

export default rootReducer;