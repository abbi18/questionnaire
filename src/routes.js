import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';

export default (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </App>
    </BrowserRouter>
);