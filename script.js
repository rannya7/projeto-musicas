document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let musica = document.getElementById("musica").value;
    let artista = document.getElementById("artista").value;

    let tabela = document.getElementById("tabela");
    let novaLinha = tabela.insertRow();

    let cel1 = novaLinha.insertCell(0);
    let cel2 = novaLinha.insertCell(1);
    let cel3 = novaLinha.insertCell(2);

    cel1.innerText = nome;
    cel2.innerText = musica;
    cel3.innerText = artista;

    document.getElementById("formulario").reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];

    
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); 
        let nome = document.getElementById("nome").value;
        let musica = document.getElementById("musica").value;
        let artista = document.getElementById("artista").value;
        let novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${musica}</td>
            <td>${artista}</td>
            
        `;
        adicionarEventos(novaLinha);
        formulario.reset();
    });

    

});

function sortTable(columnIndex) {
    let table = document.querySelector("table");
    let rows = Array.from(table.rows).slice(1);
    let ascending = table.dataset.sortOrder !== "asc";
    
    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.trim().toLowerCase();
        let cellB = rowB.cells[columnIndex].innerText.trim().toLowerCase();
        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
    
    table.tBodies[0].append(...rows);
    table.dataset.sortOrder = ascending ? "asc" : "desc";
};
