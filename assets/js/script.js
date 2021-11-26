
/*
Case Sensitive = reconhece letras maiusculas e minusculas
por tag: getElementByTagName()
por Id: getElementByName()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

/*function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
} else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'  --- metodo do video de tiago
}
*/

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    //regex para validação do email

    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    //if modificado para chegar se o email bate com o padrão

    if(email.value.match(regex)){
        txtEmail.innerHTML = 'Email válido';
        txtEmail.style.color = 'green';
        emailOk =  true;
    } else{
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = 'red';
        emailOk = true
        }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...') 
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}








