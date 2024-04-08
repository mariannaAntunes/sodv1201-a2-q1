function addCurrentWeather(temp, conditions, icon)
{
    //let iconRef = findIcon(icon)
    document.querySelector('div').innerHTML=
    `<h1>Calgary Current Weather</h1>
    <div id="container">
        <div id="temp">
            <p>Temperature</p>
            <h2>${temp} °C</h2>
        </div>
        <div id="description">
            <p>${conditions}</p>
            <img id="icon" src="../images/${icon}.png">
        </div>
    </div>`
}

export {addCurrentWeather}


