
export function selectItemHour(){

    const $tabPanel = document.querySelectorAll('.tabPanel')

    $tabPanel.forEach(($item,index) => {
        const $tabItem = $item.querySelectorAll('.dayWeather-item')
        $tabItem.forEach(($itemHour,indexHour) => {
            $itemHour.addEventListener('click', function(e){

                const $itemSelected = this
                console.log($itemSelected)
                const $itemActive = document.querySelector('.is-selected')
                console.log($itemActive)
            
            })
        })
    })


}

function handleSelectItemHour(){

    console.log(this)

}