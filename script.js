console.log('Javascript carregado');

function handleValidaCpf(cpf) {

    if (cpf.length != 11) {
        return false
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9)


        var soma = 0
        for (let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }
        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)

        // Validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false
        }
        console.log(digitos.toString().charAt(0) + ' é a primeira posição da variável soma')
    }
    return cpf
}

function handleValidacao() {
    console.log('Iniciando validação cpf');

    var cpf = document.getElementById('cpf').value;

    var resultadoValidacao = handleValidaCpf(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'
    } else {
        document.getElementById('error').style.display = 'block'
    }
}

