import {addCurrentWeather} from './function.js'
const weatherURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/calgary?unitGroup=metric&include=current&key=ZFHPPPH7ADAL3A9PPQG7474NJ&contentType=json'

fetch(weatherURL)
.then(response=>{
    if(!response.ok){
        throw new Error (`HTTP error! Status: ${response.status}`)
    }
    return response.json()
})
.then(response=>{
    let weatherData = response
    addCurrentWeather(weatherData.currentConditions.temp, weatherData.currentConditions.conditions, weatherData.currentConditions.icon)

})
.catch(error=>{
    console.log(error)
})