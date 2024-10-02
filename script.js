// Selecionando o formulário e a tabela
const formulario = document.getElementById('formulario');
const tabelaContatos = document.querySelector('#tabelaContatos tbody');

// Adicionando o evento de submissão do formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio automático do formulário

    // Obtém os valores dos campos nome e telefone
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Verifica se ambos os campos estão preenchidos
    if (nome && telefone) {
        // Cria uma nova linha para a tabela
        const novaLinha = document.createElement('tr');

        // Adiciona o nome na célula
        const colunaNome = document.createElement('td');
        colunaNome.textContent = nome;
        novaLinha.appendChild(colunaNome);

        // Adiciona o telefone na célula
        const colunaTelefone = document.createElement('td');
        colunaTelefone.textContent = telefone;
        novaLinha.appendChild(colunaTelefone);

        // Adiciona a nova linha à tabela
        tabelaContatos.appendChild(novaLinha);

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        alert('Por favor, preencha ambos os campos.');
    }
});
