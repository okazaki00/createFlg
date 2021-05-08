import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/home';
import About from './pages/About/about';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;