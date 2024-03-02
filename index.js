const weather = document.getElementById("weather")
const wind = document.getElementById("wind")
const time = document.getElementById("time")

fetch("https://api.open-meteo.com/v1/forecast?latitude=11.0510&longitude=76.0711&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
.then(response => response.json())
.then(data => {
    weather.innerHTML = (data.current.temperature_2m + "&deg;C")
    wind.innerHTML = (data.current.wind_speed_10m)
    time.innerHTML =(data.current.time)

})
.catch (error => {
    console.log(error)
})