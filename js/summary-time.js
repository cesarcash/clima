import {formatHumidity,formatTemp,formatWind} from './utils/format-data.js'
import {createDOM} from './utils/dom.js'

export function sumaryTimeTemplate({tempMax,tempMin,wind,humidity},id) {

    return `
        <div class="dayWeather-summary" id="${id}">
            <p>Máx: <strong>${tempMax}</strong></p>
            <p>Mín: <strong>${tempMin}</strong></p>
            <p>Viento: <strong>${wind}</strong></p>
            <p>Humedad: <strong>${humidity}</strong></p>
        </div>
    `

}

export function createSummaryTime(weather,id) {

    const tempMax = formatTemp(weather.main.temp_max)
    const tempMin = formatTemp(weather.main.temp_min)
    const wind = formatWind(weather.wind.speed)
    const humidity = formatHumidity(weather.main.humidity)
    
    const config = {
        tempMax,
        tempMin,
        wind,
        humidity
    }

    const $content = createDOM(sumaryTimeTemplate(config,id))

    if(id > 0){
        $content.style.display = 'none'
    }

    return $content
    

}
