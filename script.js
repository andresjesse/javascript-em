// console.log("hello");

const fin = document.getElementById("fin");
const bt = document.getElementById("bt");
const tb = document.getElementById("tb");

// let data = [];
let data = [
  { id: 1, name: "Fulano", provas: [7, 8, 9, 7] },
  { id: 2, name: "Ciclano", provas: [10, 10, 10, 10] },
];

fin.addEventListener("change", (ev) => {
  const file = ev.target.files[0];

  const fr = new FileReader();

  fr.onload = function () {
    data = JSON.parse(fr.result);
  };

  fr.readAsText(file);
});

bt.addEventListener("click", () => {
  //   alert("hello button");
  //   console.log(data);

  let str = "";

  //   str += "<tr> <td>ASD</td> <td>ASD</td> <tr>";
  //   str += "<tr> <td>ASD</td> <td>ASD</td> <tr>";
  //   str += "<tr> <td>ASD</td> <td>ASD</td> <tr>";

  data.forEach((d) => {
    str += "<tr> <td>" + d.id + "</td> <td>" + d.name + "</td> <tr>";
  });

  str += "";

  tb.innerHTML = str;

  // const tr = tbl.insertRow();
});
