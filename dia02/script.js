let g_button = document.querySelector("#gerar")
let tamanho = document.querySelector("#size")
let senha = document.querySelector("#senha_box")

g_button.addEventListener('click', criar)

function criar(){

    if(tamanho.value >= 1 && tamanho.value <= 50){

        let size = tamanho.value
        let y_sin = gerar(size)

        senha.style.display = 'block'
        senha.textContent = y_sin

    } else if (tamanho.value > 50){
        alert('Digite um tamanho menor que 50!')
        tamanho.value = ""
        senha.textContent = ''
        senha.style.display = 'none'
    } else {
        alert('Digite um tamanho para a senha!')
    }
 
}

function gerar(size){
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&_.'

    let y_sin = ''

    for(let i = 0; i < size; i++){
        let indice = Math.floor(Math.random() * caracteres.length)
         y_sin += caracteres[indice]
    } 
    return y_sin
}