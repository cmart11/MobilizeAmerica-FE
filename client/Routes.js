import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { EventList, EventPage, Map } from './components';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={EventList} />
                <Route path="/event/:eventID" component={EventPage} />
                <Route path="/map" component={Map} />
            </Switch>
        );
    }
}
