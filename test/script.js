function remove() {
  var x = document.getElementById("Select");
  x.remove(x.selectedIndex);
}

function adicionar() {
  var select = document.getElementById("Select");
  var option = document.createElement("option");
  var texto = document.getElementById("novo");
  option.textContent = texto.value;
  texto.value = "";
  texto.focus();
  option.setAttribute("id", "texto");
  select.appendChild(option);
}
