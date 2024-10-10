
// Manipulçao do formulario no web-site
document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault(); // tratamento de evento = verificar e enviar se as condiçoes forem atendidas. 

    let name = document.querySelector('#reg_name');
    let email = document.querySelector('#reg_email');
    let cpf = Number(document.querySelector('#reg_cpf').value);
    let idade = Number(document.querySelector('#reg_idade').value);

    alert('Cadastro realizado!');

}) 