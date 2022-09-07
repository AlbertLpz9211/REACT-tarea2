import React from 'react';

const Information = ({weather}) => {
    return (
        <div>
            <h1>Weather Master App</h1>
            <h2>{weather?.name}, {weather.sys?.country}</h2>
            <h2>{weather.weather?.[0].description}</h2>
            <h2>{weather.main?.temp}</h2>
        </div>
    );
};

export default Information;