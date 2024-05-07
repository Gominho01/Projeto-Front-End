function excluirSolicitacao(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function atualizarCampos() {
    var servico = document.getElementById("servico").value;
    var preco = document.getElementById("preco");
    var prazo = document.getElementById("prazo");
    var dataPrevista = document.getElementById("data-prevista");
    var status = document.getElementById("status");

    if (servico === "manutencao_rede") {
        preco.textContent = "R$ 200,00";
        prazo.textContent = "15 dias úteis";
    } else if (servico === "instalacao_software") {
        preco.textContent = "R$ 150,00";
        prazo.textContent = "10 dias úteis";
    }
    var prazoDias = parseInt(prazo.textContent.match(/\d+/)[0]);
    var dataAtual = new Date();
    var dataPrevistaCalculada = new Date(dataAtual.getTime() + prazoDias * 24 * 60 * 60 * 1000);
    var dd = String(dataPrevistaCalculada.getDate()).padStart(2, '0');
    var mm = String(dataPrevistaCalculada.getMonth() + 1).padStart(2, '0');
    var yyyy = dataPrevistaCalculada.getFullYear();
    dataPrevista.textContent = dd + '/' + mm + '/' + yyyy;
    status.textContent = "Em Elaboração";
}

function incluirSolicitacao() {
    var servico = document.getElementById("servico").value;
    var preco = document.getElementById("preco").textContent;
    var dataPrevista = document.getElementById("data-prevista").textContent;
    var status = document.getElementById("status").textContent;

    var table = document.getElementById("solicitacoes-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    var dataAtual = new Date();
    var dd = String(dataAtual.getDate()).padStart(2, '0');
    var mm = String(dataAtual.getMonth() + 1).padStart(2, '0');
    var yyyy = dataAtual.getFullYear();
    var dataPedido = dd + '/' + mm + '/' + yyyy;

    cell1.textContent = dataPedido;
    cell2.textContent = table.rows.length;
    cell3.textContent = servico;
    cell4.textContent = status;
    cell5.textContent = preco;
    cell6.textContent = dataPrevista;
    cell7.innerHTML = '<button class="excluir-btn" onclick="excluirSolicitacao(this)">Excluir</button>';
}
