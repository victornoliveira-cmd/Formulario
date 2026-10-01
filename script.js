const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        dataNascimento: document.getElementById("nascimento").value,
        rg: document.getElementById("rg").value,
        cpf: document.getElementById("cpf").value,
        nacionalidade: document.getElementById("nacionalidade").value,
        naturalidade: document.getElementById("naturalidade").value,
        altura: document.getElementById("altura").value,
        peso: document.getElementById("peso").value,
        sexo: document.getElementById("sexo").value,
        email: document.getElementById("email").value
    };

    console.log(JSON.stringify(dados, null, 2));

    alert("Cadastro realizado com sucesso!");

    formulario.reset();
});
