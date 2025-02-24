document.addEventListener("DOMContentLoaded", function() {
  const listaTarefas = document.getElementById("listaTarefas");

  // Recupera as tarefas salvas
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  // Exibe cada tarefa na tela
  tarefas.forEach(tarefa => {
      let divTarefa = document.createElement("div");
      divTarefa.classList.add("tarefa");
      divTarefa.style.backgroundColor = tarefa.cor; // Define a cor escolhida pelo professor
      divTarefa.innerHTML = `
          <p>TAREFA</p>
          <h3>${tarefa.nome}</h3>
          <p>Entrega: ${tarefa.data}</p>
      `;

      // Redirecionamento ao clicar na tarefa
      divTarefa.addEventListener("click", () => {
          window.open(tarefa.link, "_blank");
      });

      listaTarefas.appendChild(divTarefa);
  });
});
