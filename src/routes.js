import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './containers/App';
import welcome from './containers/welcome/welcome';

export default (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={welcome} />
            </Switch>
        </App>
    </BrowserRouter>
);