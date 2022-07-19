
export function selectItemHour(){

    // const $tabPanel = document.querySelectorAll('.tabPanel')

    // $tabPanel.forEach(($item,index) => {
        const $tabItem = document.querySelectorAll('.dayWeather-item')
        $tabItem.forEach(($itemHour,indexHour) => {
            $itemHour.addEventListener('click', handleSelectItemHour)
        })
    // })


}

function handleSelectItemHour(){

    const $itemSelected = this
    const $containerItem = $itemSelected.parentElement

    const $itemActive = $containerItem.querySelector('.is-selected')
    $itemActive.classList.remove('is-selected')
    $itemSelected.classList.add('is-selected')

    const summaryId = $itemSelected.id
    const $summarySelected = document.querySelector(`[data-id="${summaryId}"]`)
    $summarySelected.style.display = 'grid'

}