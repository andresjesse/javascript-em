// console.log("hello");

const fin = document.getElementById("fin");
const bt = document.getElementById("bt");
const bt2 = document.getElementById("bt2");
const tb = document.getElementById("tb");

// variável global para armazenar os dados
// let data = [];
let data = [
  { id: 1, turma: "5A", name: "Fulano", provas: [7, 8, 9, 7] },
  { id: 2, turma: "5A", name: "Ciclano", provas: [10, 10, 10, 10] },
  { id: 3, turma: "5B", name: "Beltrano", provas: [3, 3, 1, 1] },
];

// evento para leitura do arquivo
fin.addEventListener("change", (ev) => {
  const file = ev.target.files[0];

  const fr = new FileReader();

  fr.onload = function () {
    data = JSON.parse(fr.result);
  };

  fr.readAsText(file);
});

const montarTabela = function (data) {
  let str = "";

  //   str += "<tr> <td>ASD</td> <td>ASD</td> <tr>";
  //   str += "<tr> <td>ASD</td> <td>ASD</td> <tr>";
  //   str += "<tr> <td>ASD</td> <td>ASD</td> <tr>";

  data.forEach((d) => {
    // inicio da linha
    str += "<tr>";

    // colunas da linha
    str += "<td>" + d.id + "</td>";
    str += "<td>" + d.nome + "</td>";
    str += "<td>" + d.turma + "</td>";

    // para cada prova, adicionar uma coluna
    d.provas.forEach((prova) => {
      str += "<td>" + prova + "</td>";
    });

    // fim da linha
    str += "<tr>";
  });

  tb.innerHTML = str;
};

// evento botão
bt.addEventListener("click", () => {
  montarTabela(data);
});

// evento botão
bt2.addEventListener("click", () => {
  const nData = [];

  data.forEach((aluno) => {
    const media =
      (aluno.provas[0] + aluno.provas[1] + aluno.provas[2] + aluno.provas[3]) /
      4;

    console.log(media);

    if (media > 6) {
      nData.push(aluno);
    }
  });

  montarTabela(nData);
});
