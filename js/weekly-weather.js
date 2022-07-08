import { getWeeklyWeather } from './services/weather.js'
import { getLatLon } from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'
import { createDOM } from './utils/dom.js'
import { createPeriodTime }  from './period-time.js'
import draggable from './draggable.js'

function tabPanelTemplate(id){
    return `
        <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
            <div class="dayWeather" id="dayWeather-${id}">
                <ul class="dayWeather-list" id="dayWeather-list-${id}">
                </ul>
                <div class="dayWeather-summary" id="dayWeather-summary-${id}"></div>
            </div>
        </div>
    `;
}

function createTabPanel(id){
    const $panel = createDOM(tabPanelTemplate(id));
    if(id > 0){
        $panel.hidden = true
    }
    return $panel;
}

function configWeeklyWeather(weeklist){
        
    const $container = document.querySelector('.tabs');

    weeklist.forEach((day,index) => {

        const $panel = createTabPanel(index)
        
        $container.append($panel)
        day.forEach((weatherDay,indexDay) => {            
            $panel.querySelector('.dayWeather-list').append(createPeriodTime(weatherDay)) /* aqui */
        })

    })

}

export default async function weeklyWeather(){

    const $container = document.querySelector('.weeklyWeather');
    
    const {lat,lon,isError} = await getLatLon();
    if(isError) return console.log('no obtuvimos tu ubicación')

    const {isError: weeklyWeatherError, data: weather} = await getWeeklyWeather(lat,lon);

    if(weeklyWeatherError) return console.log('A ocurrido un error al traer el pronostico del clima');
    const weeklist = formatWeekList(weather.list)
    
    configWeeklyWeather(weeklist);

    // console.log(weeklist)

    draggable($container)

}