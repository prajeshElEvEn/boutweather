const requests = require('requests')

const weather = (city) => {
    const apiKey = "1a71fddaaef8394e60023c71f6691706"
    requests("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + apiKey)
        .on('data', async function (chunk) {
            var parsed = JSON.parse(chunk);
            console.log("------------------------")
            console.log('Know your Weather')
            console.log("------------------------")
            console.log('City: ', parsed.name)
            console.log('Country: ', parsed.sys.countries)
            console.log('Longitude: ', parsed.coord.lon, 'deg')
            console.log('Latitude: ', parsed.coord.lat, 'deg')
            console.log('Weather: ', parsed.weather[0].description)
            console.log('Temperature: ', parsed.main.temp, 'deg C')
            console.log('Max. Temp.: ', parsed.main.temp_max, 'deg C')
            console.log('Max. Temp.: ', parsed.main.temp_min, 'deg C')
            console.log('Feels like: ', parsed.main.feels_like, 'deg C')
            console.log('Wind speed: ', parsed.wind.speed, 'km/h')
            console.log('Cloudiness: ', parsed.clouds.all, '%')
            console.log('Humidity: ', parsed.main.humidity, '%')
            console.log('Pressure: ', parsed.main.pressure, 'hPa')
            console.log("------------------------")
        })
        .on('end', (err) => {
            if (err) return console.log('Sorry ;-; No results found!.');
        });
}

module.exports = weather