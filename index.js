let stats = document.querySelector(".status");
let text = document.getElementById("text");
let char = document.getElementById("char");
let words = document.getElementById("words");
let lines = document.getElementById("lines");
let symbols = document.getElementById("symbols");

function count() {
  if (text.value.length === 0) {
    stats.style.display = "none";
  } else {
    stats.style.display = "block";
    char.innerHTML = text.value.length + " caracteres";
    words.innerHTML = text.value.trim().split(/\s+/).length + " palavras";
    lines.innerHTML = text.value.split("\n").length + " linhas";
    symbols.innerHTML =
      text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " símbolos";
  }
}

text.addEventListener("input", count);
