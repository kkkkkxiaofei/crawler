import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import listingReducer from './iproperty/srpReducer';

const iproperty = combineReducers({
    srp: listingReducer
});

export default combineReducers({
    routing,
    iproperty
});
