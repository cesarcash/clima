import { getWeeklyWeather } from './services/weather.js'
import { getLatLon } from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'
import { createDOM } from './utils/dom.js'

function configWeeklyWeather(weeklist){
    
    const $container = document.querySelector('.weeklyWeather');

    weeklist.forEach((item,index) => {
        const $el = createDOM('<h2>hola</h2>');
        $container.appendChild($el)
    })

}

export default async function weeklyWeather(){
    
    const {lat,lon,isError} = await getLatLon();
    if(isError) return console.log('no obtuvimos tu ubicación')

    const {isError: weeklyWeatherError, data: weather} = await getWeeklyWeather(lat,lon);

    if(weeklyWeatherError) return console.log('A ocurrido un error al traer el pronostico del clima');
    const weeklist = formatWeekList(weather.list)
    
    configWeeklyWeather(weeklist);

}