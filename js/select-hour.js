
export function selectItemHour(){
    const $itemHour = document.querySelectorAll('.dayWeather-item')

    $itemHour.forEach((item,index) => {
        item.addEventListener('click',handleSelectItemHour)
        console.log(item)
    })

}

function handleSelectItemHour(event){

    //selecciona item activo
    //selecciona item a activar
    
    const $itemSelected = event.target.parentElement;
    
    
    if($itemSelected.classList.contains('dayWeather-item')){
        
        // const $itemActive
        const $itemActive = document.querySelector('.is-selected')
        $itemActive.classList.remove('is-selected')
        $itemSelected.classList.add('is-selected')


        const id = $itemSelected.getAttribute('data-id')
        const $summarySelected = document.getElementById(id)
        
        // console.log(id)
        console.log($itemActive)
        // console.log($summarySelected)
        
        // $summarySelected.style.display = 'grid'


    }

}