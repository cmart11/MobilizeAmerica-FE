import React from 'react'
import { Link } from 'react-router-dom'

export default function Event(props) {
    const { event } = props;
    return (
        <div key={event.id} className="event-thumbnail">

            <h3 className="thumbnail-info title">{event.title}</h3>
            <div className="crop">
                <img
                    src={event.featured_image_url}
                    alt={event.title}
                    className="thumbnail-img"
                />
            </div>
            {/* Truncate length of description field */}
            <p className="thumbnail-info">{event.description.length > 100 ? `${event.description.slice(0, 97)}...` : event.description}</p>
            <Link to={`/event/${event.id}`}>
                <button className="thumbnail-info btn">See Event Info</button>
            </Link>
        </div>
    );
}
