import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Srp from './containers/iproperty/Srp';

export default (
    <Route path="/" component={App}>
        <Route path="/iproperty/srp" component={Srp} />
    </Route>
);