import React from 'react'

const CurrentLocationWeatherButton = () => {

    const exampleUrl = `http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`

    const getWeatherData = () => {
        return fetch(exampleUrl, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(weatherData => console.log(weatherData))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <button 
            className="btn btn-primary" 
            onClick={e => getWeatherData(e)}
            >click me!</button>
        </div>
    )
}

export default CurrentLocationWeatherButton