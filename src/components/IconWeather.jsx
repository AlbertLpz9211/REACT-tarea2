import React from 'react';

const IconWeather = ({weather}) => {
    return (
        <div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@4x.png`} alt="" />
        </div>
    );
};

export default IconWeather;