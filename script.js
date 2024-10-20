function enviar(event){
    event.preventDefault();
    var nome = document.querySelector('#nome').value
    var email = document.querySelector('#email').value
    var numero = document.querySelector('#numero').value
    var mensagem = document.querySelector('#mensagem').value
    var erro = document.querySelector('#erro')

    if(
        (nome.length < 2)
        
    ){  erro.textContent = 'O nome precisa ter mais de 2 letras, preencha todos os campos.'
        return
    }
    if(email.length == 0){
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    if(numero.length == 0){
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    if(mensagem.length == 0){
        erro.textContent = 'Preencha todos os campos.'
        return
    }
    erro.style.background='#5C3973'
    erro.textContent = 'Mensagem enviada com sucesso!'

}