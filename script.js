// variaveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//variaveis usada para fazer o calculo

const Modal ={

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open(){
          Modal.wrapper.classList.add('open')
    },
    close(){
          Modal.wrapper.classList.remove('open')
    }
}

// funcao para capturar os valores dos input

form.onsubmit = (event) => {
    event.preventDefault()//evitar o padrao, ou seja nao carregar a pagina.

    const weight = inputWeight.value
    const height = inputHeight.value


    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
        Modal.open()
  

}
// remover o close

    Modal.buttonClose.onclick = () => {
     Modal.close()
}

// funcao de IMC

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)) . toFixed(2)
}