import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Link } from 'react-router-dom'


export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 32.5297156,
        longitude: -97.286868,
        zoom: 8,
        height: '100vh',
        width: '100vw'
    });

    const [events, setEvents] = useState({});

    async function fetchData() {
        const res = await fetch('https://api.mobilize.us/v1/events');
        res
            .json()
            .then(resp => setEvents(resp.data))
            .catch(error => new Error(error));
    }

    useEffect(() => {
        fetchData();
    });

    const [selected, setSelected] = useState(null);


    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken=""
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {
                    events.length ?
                        events
                            .filter(event => (event.location !== null && event.location.location.latitude !== null)) //filter out events without latitude || longitude coordinates
                            .map(event => (
                                <Marker
                                    key={event.id}
                                    latitude={event.location.location.latitude}
                                    longitude={event.location.location.longitude}
                                >
                                    <button
                                        className="marker"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelected(event);
                                        }}
                                    />
                                </Marker>
                            ))
                        : null
                }
                {selected ? (
                    <Popup
                        latitude={selected.location.location.latitude}
                        longitude={selected.location.location.longitude}
                        onClose={() => {
                            setSelected(null);
                        }}
                    >
                        <div width="200px">
                            <h3 className="thumbnail-info title">{selected.title}</h3>
                            <p className="thumbnail-info">{selected.description.length > 150 ? `${selected.description.slice(0, 147)}...` : selected.description}</p>
                            <Link to={`/event/${selected.id}`}>
                                <button className="btn" type="button">See Event Info</button>
                            </Link>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div >
    )
}
