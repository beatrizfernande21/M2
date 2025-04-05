
class Paciente {
    constructor(nome, idade, cpf, diagnostico, medico) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.diagnostico = diagnostico;
        this.medico = medico;
    }
}

const pacientes = []; // Array para armazenar os pacientes
const form = document.getElementById("pacienteForm"); // Seleciona o formulário
const pacienteList = document.getElementById("pacienteList"); // Seleciona a div de lista

// Evento de envio do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cpf = document.getElementById("cpf").value;
    const diagnostico = document.getElementById("diagnostico").value;
    const medico = document.getElementById("medico").value;

    // Verifica se todos os campos foram preenchidos
    if (nome && idade && cpf && diagnostico && medico) {
        // Cria um novo paciente e adiciona ao array
        const novoPaciente = new Paciente(nome, idade, cpf, diagnostico, medico);
        pacientes.push(novoPaciente);
        atualizarLista(); // Atualiza a exibição da lista
        form.reset(); // Limpa os campos
    } else {
        alert("Preencha todos os campos!");
    }
});

// Função para exibir os pacientes na tela
function atualizarLista() {
    pacienteList.innerHTML = ""; // Limpa a lista
    pacientes.forEach((paciente, index) => {
        const div = document.createElement("div");
        div.classList.add("paciente-card");
        div.innerHTML = `
            <div>
                <strong>${paciente.nome}</strong> - ${paciente.idade} anos <br>
                CPF: ${paciente.cpf} <br>
                Diagnóstico: ${paciente.diagnostico} <br>
                Médico: ${paciente.medico}
            </div>
            <div class="buttons">
                <button class="edit" onclick="editarPaciente(${index})">Editar</button>
                <button class="delete" onclick="deletarPaciente(${index})">Excluir</button>
            </div>
        `;
        pacienteList.appendChild(div); // Adiciona à tela
    });
}

// Função para editar os dados de um paciente
function editarPaciente(index) {
    const novoNome = prompt("Novo nome:", pacientes[index].nome);
    const novaIdade = prompt("Nova idade:", pacientes[index].idade);
    const novoCpf = prompt("Novo CPF:", pacientes[index].cpf);
    const novoDiagnostico = prompt("Novo diagnóstico:", pacientes[index].diagnostico);
    const novoMedico = prompt("Novo médico responsável:", pacientes[index].medico);

    // Atualiza os dados se todos forem preenchidos
    if (novoNome && novaIdade && novoCpf && novoDiagnostico && novoMedico) {
        pacientes[index].nome = novoNome;
        pacientes[index].idade = novaIdade;
        pacientes[index].cpf = novoCpf;
        pacientes[index].diagnostico = novoDiagnostico;
        pacientes[index].medico = novoMedico;
        atualizarLista(); // Atualiza a tela
    }
}

// Função para excluir um paciente da lista
function deletarPaciente(index) {
    pacientes.splice(index, 1); // Remove 1 item do array na posição index
    atualizarLista(); // Atualiza a exibição
}