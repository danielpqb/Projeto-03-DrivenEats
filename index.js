let plates = document.getElementsByClassName('prato')

window.onload = () => {
    //Iterate plates
    for (let i = 0; i < plates.length; i++) {
        let plate = plates[i]
        plate.onclick = select
        plate.id = i
        
        //nplates.push(plate)
        //plate.style.backgroundColor = 'red'
    }
    //console.log(nplates)
    console.log(plates)
}

function select() {
    this.style.border = "5px solid #32B72F"
}