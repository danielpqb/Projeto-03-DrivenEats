let choices = document.getElementsByClassName('escolha')

window.onload = () => { //Iterate choices
    for (let i = 0; i < choices.length; i++) {
        choices[i].onclick = select
    }
}

function select() {
    for (let i = 0; i < this.classList.length; i++) {
        switch (this.classList[i]) {
            case 'prato':
                if (document.querySelector('.select1') != null) {
                    document.querySelector('.select1').classList.remove('select1')
                }
                this.classList.toggle('select1')
                break;
            case 'bebida':
                if (document.querySelector('.select2') != null) {
                    document.querySelector('.select2').classList.remove('select2')
                }
                this.classList.toggle('select2')
                break;
            case 'sobremesa':
                if (document.querySelector('.select3') != null) {
                    document.querySelector('.select3').classList.remove('select3')
                }
                this.classList.toggle('select3')
                break;
        }
    }
}