
function buscarCEP() {
    var cep = document.getElementById('cep').value.replace(/\D/g, '');

    fetch(`https://api.brasilaberto.com/v1/zipcode/${cep}`)
        .then(response => response.json()) //converte a resposta em json
        .then(data => preencherFormulario(data))// chama função formulario
        .catch(error => console.log('Erro ao buscar CEP:', error)) 
        tch(error => console.error('erro em buscar o cep:'),error)
}



// function preencherFormulario(data){
//     document.getElementById('logradouro').value = data.logradouro
//     document.getElementById('bairro').value = data.bairro
//     document.getElementById('localidade').value = data.Localidade
//     document.getElementById('uf').value = data.uf

//     document.getElementById('str').innerHTML = JSON.stringify(data)

// }
