console.log('Javascript carregado');

function handleValidaCpf(cpf) {

    return cpf
}

function handleValidacao() {
    console.log('Iniciando validação cpf');

    var cpf = document.getElementById('cpf').value;

    var resultadoValidacao = handleValidaCpf(cpf);
    console.log(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'
    } else {
        document.getElementById('error').style.display = 'block'
    }
}

