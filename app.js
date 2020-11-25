function addListeners(){
    
    $('button').on('click',(event)=>{
       alert( event.target.textContent)
    })
}

addListeners()
