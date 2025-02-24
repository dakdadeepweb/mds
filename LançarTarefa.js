document.getElementById("tarefaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página

    // Capturando os valores dos campos
    const nome = document.getElementById("nomeTarefa").value;
    const cor = document.getElementById("corTarefa").value;
    const data = document.getElementById("dataEntrega").value;
    const link = document.getElementById("linkTarefa").value;

    // Criando um objeto com os dados da tarefa
    const novaTarefa = {
        nome,
        cor,
        data,
        link
    };

    // Salvando no armazenamento local (pode ser substituído por um banco de dados futuramente)
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    alert("Tarefa lançada com sucesso!");
    document.getElementById("tarefaForm").reset();
});
