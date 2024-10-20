document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const numero = document.getElementById("numero").value.trim();

    document.getElementById("error-name").innerText = "";
    document.getElementById("error-surname").innerText = "";
    document.getElementById("error-email").innerText = "";
    document.getElementById("error-phone").innerText = "";
    document.getElementById("response-message").innerText = "";

    let hasError = false;

    let errorMessage = {
      nome: (error) => {
        document.getElementById("error-name").innerText = error;
        hasError = true;
      },
      sobrenome: (error) => {
        document.getElementById("error-surname").innerText = error;
        hasError = true;
      },
      email: (error) => {
        document.getElementById("error-email").innerText = error;
        hasError = true;
      },
      numero: (error) => {
        document.getElementById("error-phone").innerText = error;
        hasError = true;
      },
    };

    if (nome.length < 2) {
      errorMessage.nome("O nome deve ter pelo menos 2 letras.");
    }


    if (sobrenome.length < 2) {
      errorMessage.sobrenome("O sobrenome deve ter pelo menos 2 letras.");
    }


    if (!email) {
      errorMessage.email("O campo de e-mail não pode ficar vazio.");
    } else if (!validateEmail(email)) {
      errorMessage.email("Formato de e-mail inválido.");
    }


    if (!numero) {
      errorMessage.numero("O campo de telefone não pode ficar vazio.");
    }


    if (!hasError) {
      document.getElementById("response-message").innerText =
        "Formulário enviado com sucesso!";

    }
  });


function validateEmail(email) {
  return email.includes("@") && email.split("@")[1].includes(".");
}


function mostrarConteudo() {
    const conteudo = document.getElementById('conteudo');
    const categoria = document.getElementById('categoria').value;

    let texto = '';

    switch (categoria) {
        case 'cuidados':
            texto = '<h3>Cuidados básicos</h3><p>Ao adotar um novo pet, é importante garantir que ele tenha um espaço seguro, brinquedos, e visitas regulares ao veterinário.</p>';
            break;
        case 'alimentacao':
            texto = '<h3>Alimentação</h3><p>Forneça alimentos adequados para a idade e tamanho do seu pet. Lembre-se de consultar um veterinário para recomendações.</p>';
            break;
        case 'adaptacao':
            texto = '<h3>Adaptação</h3><p>Adaptação pode ser um processo lento. Ofereça um ambiente tranquilo e dê tempo ao pet para se acostumar com sua nova casa.</p>';
            break;
        case 'saude':
            texto = '<h3>Saúde</h3><p>Leve seu pet para exames regulares e mantenha as vacinas em dia. A prevenção é a melhor forma de garantir uma vida saudável.</p>';
            break;
        default:
            texto = '<p>Selecione uma categoria para ver o conteúdo.</p>';
    }

    conteudo.innerHTML = texto;
}
