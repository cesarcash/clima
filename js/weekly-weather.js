import { getWeeklyWeather } from './services/weather.js'
import { getLatLon } from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'
import { createDOM } from './utils/dom.js'
import { createPeriodTime }  from './period-time.js'
import draggable from './draggable.js'

import {createSummaryTime} from './summary-time.js'
import {selectItemHour} from './select-hour.js'

function tabPanelTemplate(id){
    return `
        <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
            <div class="dayWeather" id="dayWeather-${id}">
                <ul class="dayWeather-list" id="dayWeather-list-${id}" >
                </ul>                
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

            const id = {index,indexDay}

            $panel.querySelector('.dayWeather-list').append(createPeriodTime(weatherDay,id))
            $panel.append(createSummaryTime(weatherDay,id))
            
        })

    })
    selectItemHour()
}

export default async function weeklyWeather(){

    const $container = document.querySelector('.weeklyWeather');
    
    const {lat,lon,isError} = await getLatLon();
    if(isError) return console.log('no obtuvimos tu ubicación')

    const {isError: weeklyWeatherError, data: weather} = await getWeeklyWeather(lat,lon);

    if(weeklyWeatherError) return console.log('A ocurrido un error al traer el pronostico del clima');
    const weeklist = formatWeekList(weather.list)
    
    configWeeklyWeather(weeklist);

    draggable($container)

}