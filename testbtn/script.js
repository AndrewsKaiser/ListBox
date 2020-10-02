var ul = document.getElementById("List");
var li;
var itemId;
var item;
add = function () {
  if (document.getElementById("adiciona").value != "") {
    item = document.getElementById("adiciona");
    itemId = ul.childElementCount;
    li = createItemEl(item.value, itemId);
    li.appendChild(createRemovebotaoBtn(itemId));
    ul.appendChild(li);
    adiciona.value = "";
    adiciona.focus();
  }
};

removebotao = function (itemId) {
  for (i = 0; i < ul.children.length; i++) {
    if (ul.children[i].getAttribute("index") == itemId) {
      ul.children[i].remove();
    }
  }
};

createItemEl = function (itemValue, itemId) {
  let li = document.createElement("li");
  li.setAttribute("index", itemId);
  li.appendChild(document.createTextNode(itemValue));

  return li;
};
createRemovebotaoBtn = function (itemId) {
  let btn = document.createElement("button");
  btn.setAttribute("onclick", "removebotao(" + itemId + ")");
  btn.innerHTML = "x";
  return btn;
};
