const form = document.getElementById('form-agenda');
const contatos = [];
const numero = [];


let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    somaTotalNumero();
    somaTotalTelefones();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('numero-contato');

    if (numero.includes(inputNumContato.value)){
        alert(`A atividade ${inputNumContato.value} já foi inserida`)
    } else{
        contatos.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;

    }

    inputNomeContato.value = '';
    inputNumContato.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;  
}

function somaTotalNumero() {
    const numerofinal  = somaTotalTelefones();
    document.getElementById('total').innerHTML = numerofinal;
    }
    
    function somaTotalTelefones() {
        let somaNumero = 0
        for (let i = 0 ; i < numero.length; i++ )
        somaNumero += numero[i]
    const tot  = numero.length
    return numero.length
    }