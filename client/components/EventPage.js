import React, { Component } from 'react';

export default class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: this.props.match.params.eventID,
            event: {},
        };
    }

    /*
        Here we filter out the selected event based on it's ID
        which we grab from the this.props.match.params object
    */
    componentDidMount() {
        fetch('https://api.mobilize.us/v1/events')
            .then(res => res.json())
            .then(res => {
                const data = res.data.filter(event => event.id === +this.props.match.params.eventID);
                this.setState({ event: data[0] });
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    //helper function to convert from Unix time
    timeConverter(unixTimestamp) {
        return new Date(unixTimestamp * 1000);
    }

    render() {
        const event = this.state.event.id ? this.state.event : null;
        return (
            <div>
                {
                    event ?
                        <div id="event-page">
                            <div className="event-info">
                                <h3 className="event-info-h3">{event.title}</h3>
                                <img src={event.featured_image_url} alt="featured image" className="event-info-img" />
                            </div>
                            <div className="event-info info-right">
                                <p className="event-info-p">{event.description}</p>
                                <h3 className="event-info-h3">Event Date(s):</h3>
                                <select id="date-selector">
                                    {
                                        event.timeslots
                                            .filter(slot => slot.is_full === false)
                                            .map(slot => {
                                                return (
                                                    <option key={slot.id}>
                                                        {`${this.timeConverter(slot.start_date)}`}
                                                    </option>
                                                );
                                            })
                                    }
                                </select>
                            </div>

                        </div>
                        : <h1>Loading Event Info...</h1>
                }
            </div>
        );
    }
}
