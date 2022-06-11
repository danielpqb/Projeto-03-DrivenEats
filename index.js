class Order {
    constructor(plateInfo, drinkInfo, desertInfo, finalPrice) {
        this.plateInfo = plateInfo
        this.drinkInfo = drinkInfo
        this.desertInfo = desertInfo
        this.finalPrice = finalPrice
    }
}

function select() {
    for (let i = 0; i < this.classList.length; i++) {
        switch (this.classList[i]) {
            case 'prato':
                order.plateInfo = [parseFloat(this.querySelector('.preco').innerHTML.replace(/[^\d,]/g, '').replace(',', '.')), this.querySelector('h1').innerHTML]
                if (document.querySelector('.select1') != null) {
                    document.querySelector('.select1').classList.remove('select1')
                }
                this.classList.toggle('select1')
                break;
            case 'bebida':
                order.drinkInfo = [parseFloat(this.querySelector('.preco').innerHTML.replace(/[^\d,]/g, '').replace(',', '.')), this.querySelector('h1').innerHTML]
                if (document.querySelector('.select2') != null) {
                    document.querySelector('.select2').classList.remove('select2')
                }
                this.classList.toggle('select2')
                break;
            case 'sobremesa':
                order.desertInfo = [parseFloat(this.querySelector('.preco').innerHTML.replace(/[^\d,]/g, '').replace(',', '.')), this.querySelector('h1').innerHTML]
                if (document.querySelector('.select3') != null) {
                    document.querySelector('.select3').classList.remove('select3')
                }
                this.classList.toggle('select3')
                break;
        }
    }

    if ((document.querySelector('.select1') != null) &&
        (document.querySelector('.select2') != null) &&
        (document.querySelector('.select3') != null)) {
        let bi = document.querySelector('.barrainferior')
        bi.classList.add('finish')
        bi.onclick = confirmOrder
        bi.querySelector('div').innerHTML = 'Fechar pedido'
    }
}

function confirmOrder() {
    order.finalPrice = order.plateInfo[0] + order.drinkInfo[0] + order.desertInfo[0]

    document.querySelector('.confirmar').classList.remove('hide')
    document.querySelector('header').classList.add('blur')
    document.querySelector('main').classList.add('blur')
    document.querySelector('footer').classList.add('blur')

    document.querySelector('.p1').innerHTML = order.plateInfo[0].toFixed(2).replace('.', ',')
    document.querySelector('.p2').innerHTML = order.drinkInfo[0].toFixed(2).replace('.', ',')
    document.querySelector('.p3').innerHTML = order.desertInfo[0].toFixed(2).replace('.', ',')
    document.querySelector('.ptotal').innerHTML = order.finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    document.querySelector('.msg').onclick = sendMsg
    document.querySelector('.cancelar').onclick = cancel
}

function sendMsg() {
    let msg = 'Olá, gostaria de fazer o pedido:\n' +
        '- Prato: ' + order.plateInfo[1] + '\n' +
        '- Bebida: ' + order.drinkInfo[1] + '\n' +
        '- Sobremesa: ' + order.desertInfo[1] + '\n' +
        'Total: ' + order.finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    window.location.href = 'https://wa.me/5521994149949?text=' + encodeURIComponent(msg)
}

function cancel(){
    document.querySelector('.confirmar').classList.add('hide')
    document.querySelector('header').classList.remove('blur')
    document.querySelector('main').classList.remove('blur')
    document.querySelector('footer').classList.remove('blur')
}

let order = new Order()
let choices = document.getElementsByClassName('escolha')

window.onload = () => { //Iterate choices
    for (let i = 0; i < choices.length; i++) {
        choices[i].onclick = select
    }
}