import React from "react";

const Weather = ({ description, city, country, error, temperature, feels_like }) => {
  return (
    <div>
      {city && country && (
        <p>
          {city}, {country}
        </p>
      )}
      {temperature && <p>Current temperature: {temperature}°C</p>}
      {feels_like && <p><i>Feels like: {feels_like}°C</i></p>}
      {description && <p> Current conditions: {description}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
