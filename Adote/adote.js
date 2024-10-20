function showAnimalInfo(nome, idade, porte, sexo, castrado, vacinado) {
    alert("Nome: " + nome + "\nIdade: " + idade + "\nPorte: " + porte + "\nSexo: " + sexo + "\nCastrado: " + castrado + "\nVacinado: " + vacinado );
}

document.getElementById("pipper").onclick = function() {
    showAnimalInfo("Pipper", "2 meses", "Porte Pequeno", "Fêmea","Sim", "Sim");
};

document.getElementById("matilda").onclick = function() {
    showAnimalInfo("Matilda", "1 ano", "Porte Médio", "Fêmea","Sim", "Sim");
};

document.getElementById("frederico").onclick = function() {
    showAnimalInfo("Frederico", "3 anos", "Porte Grande", "Macho", "Sim", "Sim");
};

document.getElementById("duquesa").onclick = function() {
    showAnimalInfo("Duquesa", "6 meses", "Porte Médio", "Fêmea","Sim", "Sim");
};

document.getElementById("bruce").onclick = function() {
    showAnimalInfo("Bruce", "1 ano", "Porte Grande", "Macho", "Sim", "Sim");
};

document.getElementById("scooby").onclick = function() {
    showAnimalInfo("Scooby", "8 meses", "Porte Grande", "Macho", "Sim", "Sim");
};

document.getElementById("jojo").onclick = function() {
    showAnimalInfo("Jojo", "4 anos", "Porte Pequeno", "Fêmea","Sim", "Sim");
};

document.getElementById("zeca").onclick = function() {
    showAnimalInfo("Zeca", "2 anos", "Porte Médio", "Macho", "Sim", "Sim");
};

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
