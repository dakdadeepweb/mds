// Lista de alunos
const alunos = [
    "rosiearegold279", "Kanecfcbfr", "miraculizado", "Mathspa", "tensosinho_str",
    "Ked0_0", "jonybee__74049", "Ayu03212", "phelixcoisinho", "cf_elisa99_08545",
    "rosaluc_", "hakila0773", "danielcraftim", "Felix092971", "lexx2218",
    "blackxzsr", "dancra57", "https_meow", "eliseueureka_74818", "lilnick698",
    "eric.rossi", "macacomago", "gwentennyson_2010", "jw_1980", "meucoelho",
    "nicolas120795", "brenopwf", "Quited_quited", "ellienigenaa", "solaria",
    "marlissonblanc", "Jujutsu_Kaisen", "mpcmaster2024", "bugnette", "blackxzsr",
    "bywaldorf", "realm_of_jewels", "princessofstars3", "ronald_claw_26",
    "coeio0177", "o_ryan.55", "_harizz11", "springtrap4947", "tenosinho_str",
    "lisa038149", "pvd_ozzie.zz_67296", "verdadeirawikipedia", "babyz",
    "mapadeluz", "Pippoholand", "mim1zrsh", "dearladyjupter", "symphonny.z",
    "brinnbolen", "luckza8", "sonecadom"
];

// Função para preencher a tabela
const tabelaAlunos = document.getElementById("alunosTabela");

alunos.forEach(aluno => {
    const row = document.createElement("tr");

    // Cria as células da linha
    const nomeAluno = document.createElement("td");
    nomeAluno.textContent = aluno;

    const faltas = document.createElement("td");
    faltas.innerHTML = '<input type="number" min="0" placeholder="Faltas">';

    const tarefas = document.createElement("td");
    tarefas.innerHTML = '<input type="number" min="0" placeholder="Tarefas Feitas">';

    const provas = document.createElement("td");
    provas.innerHTML = '<input type="number" min="0" placeholder="Provas Feitas">';

    // Adiciona as células à linha
    row.appendChild(nomeAluno);
    row.appendChild(faltas);
    row.appendChild(tarefas);
    row.appendChild(provas);

    // Adiciona a linha à tabela
    tabelaAlunos.appendChild(row);
});

// Função para salvar os dados (a ser implementada conforme necessidade)
document.getElementById("submit").addEventListener("click", function() {
    let rows = document.querySelectorAll("tbody tr");
    rows.forEach(function(row) {
        let nomeAluno = row.cells[0].textContent;
        let faltas = row.cells[1].querySelector("input").value;
        let tarefas = row.cells[2].querySelector("input").value;
        let provas = row.cells[3].querySelector("input").value;
        
        console.log(`Aluno: ${nomeAluno} | Faltas: ${faltas} | Tarefas Feitas: ${tarefas} | Provas Feitas: ${provas}`);
        
        // Aqui você pode adicionar código para salvar ou enviar os dados para um servidor.
    });
});
