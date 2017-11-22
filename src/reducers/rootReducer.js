import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import listingReducer from '../reducers/iproperty/listingReducer';

const iproperty = combineReducers({
    srp: listingReducer
});

export default combineReducers({
    routing,
    iproperty
});
