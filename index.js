let plates = document.getElementsByClassName('prato')
let drinks = document.getElementsByClassName('bebida')
let deserts = document.getElementsByClassName('sobremesa')

let choicesIds = []

window.onload = () => {
    //Iterate plates
    for (let i = 0; i < plates.length; i++) {
        let plate = plates[i]
        //plate.onclick.arguments = '(1)'
        plate.onclick.arguments = select
        plate.id = 'plate' + i
    }

    //Iterate drinks
    for (let i = 0; i < drinks.length; i++) {
        let drink = drinks[i]
        //drink.onclick.arguments = '(2)'
        drink.onclick.arguments = select
        drink.id = 'drink' + i
    }

    //Iterate deserts
    for (let i = 0; i < deserts.length; i++) {
        let desert = deserts[i]
        //desert.onclick.arguments = '(3)'
        desert.onclick.arguments = select
        desert.id = 'desert' + i
    }

    console.log(plates)
    console.log(drinks)
    console.log(deserts)
}

function select(type) {
    switch (type) {
        case 1:
            console.log(1)
            break;
        case 2:
            console.log(2)
            break;
        case 3:
            console.log(3)
            break;
        default:
            break;
    }
    //if (this.id != false) {
        //this.style.border = "5px solid #32B72F"
    //}

}