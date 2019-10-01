import React, { Component } from 'react';

import { Event } from './index';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }
    componentDidMount() {
        fetch('https://api.mobilize.us/v1/events')
            .then(res => res.json())
            .then(res => {
                this.setState({ events: res.data });
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    render() {
        const events = this.state.events.length ? this.state.events : null;
        return (
            <div>
                <div id="event-list">
                    {
                        events !== null
                            ? events.map(event => {
                                return <Event event={event} key={event.id} timeConverter={this.timeConverter} />;
                            })
                            : <h1>Loading Events...</h1>
                    }
                </div>
            </div>
        );
    }
}
