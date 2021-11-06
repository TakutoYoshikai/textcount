
function includeSpace() {
  return document.getElementById("include-spaces").checked;
}
function getText() {
  return document.getElementById("text").value;
}
function display(text) {
  document.getElementById("display").innerText = text;
}
function count() {
  let text = getText();
  if (!includeSpace()) {
    text = text.replaceAll(" ", "").replaceAll("　", "");
  }
  document.getElementById("copied").innerText = "";
  white();
  display(text.length);
  return text.length;
}

function copyToClipboard(){
  const text = count().toString();
  const pre = document.createElement('pre');
  pre.style.webkitUserSelect = 'auto';
  pre.style.userSelect = 'auto';
  pre.textContent = text;
  document.body.appendChild(pre);
  document.getSelection().selectAllChildren(pre);
  const result = document.execCommand('copy');
  document.body.removeChild(pre);
  document.getElementById("copied").innerText = "Copied!";
  yellow();
  return result;
}

function yellow() {
  document.getElementById("display").classList.add("yellow");
}
function white() {
  document.getElementById("display").classList.remove("yellow");
}

