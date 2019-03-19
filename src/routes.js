import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import "react-bootstrap/dist/react-bootstrap.min.js";

import App from './containers/App';
import welcome from './containers/welcome/welcome';
import main from './containers/main/main';

export default (
    <HashRouter>
        <App>
            <Switch>
                <Route exact path="/" component={welcome} />
                <Route exact path="/main" component={main} />
            </Switch>
        </App>
    </HashRouter>
);