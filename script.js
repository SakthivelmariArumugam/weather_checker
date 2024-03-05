//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial//b1713d1436da346d306043415c42b636

let API_KEY="b1713d1436da346d306043415c42b636"

getWeatherData = (city) =>{
    const url='https://api.openweathermap.org/data/2.5/weather'

    const Full_Url = '${URL}?q==${city}&appid=${API_KEY}&units=imperial';

    const weatherPromise =fetch(Full_Url);

    return weatherPromise.then((response) =>{
        return response.json()
    })
}

function searchCity()
{
    const city = document.getElementById('city-input').value;

    getWeatherData(city).then((response)=>{
           
              showWeatherData(response);
              console.log(response);
    })
    .catch((err)=>{
    
      console.log(err);
})
}

showWeatherData = ()=>{
    document.getElementById("city-name").innerText=weatherData.name;
    document.getElementById("weather-type").innerText=weatherData.weather[0].main;
    document.getElementById("temp").innerText=weatherData.temp;
    document.getElementById("min-temp").innerText=weatherData.main.temp_min;
    document.getElementById("max-temp").innerText=weatherData.main.temp_max;
   

}