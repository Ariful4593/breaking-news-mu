import React from 'react';
import { Route } from 'react-router-dom';
import World from './World'
import Politics from './Politics'
import Entertainment from './Entertainment'
// import App from '../../../src/App'
const Myroute = () => {
    return (
        <div>
            <Route exact path="/" component={World}></Route>
            <Route exact path="/world" component={World}></Route>
            <Route exact path="/politics" component={Politics}></Route>
            <Route exact path="/entertainment" component={Entertainment}></Route>

        </div>
    );
};

export default Myroute;