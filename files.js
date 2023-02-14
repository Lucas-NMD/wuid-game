const interactions = document.getElementById('interactions')
const structure = document.getElementById('structure')
const styling = document.getElementById('styling')
const book = document.getElementById("book")
const htm = document.getElementById('html')
const cs = document.getElementById('css')
const js = document.getElementById('js')

console.log(localStorage.getItem('state'));
if (localStorage.state === "8") {
  js.className = "";
  cs.className = "";
  htm.className = "";
} else if (localStorage.state === "5") {
  cs.className = "";
  htm.className = "";
} else if (localStorage.state === "2") {
  htm.className = "";
}
structure.addEventListener ("click", function (ht) {
  if (localStorage.state === "1") {
    htm.className = ""
    alert("You found a inventory of office supplies")
    localStorage.state = "2"
  }
});
styling.addEventListener ("click", function (e) {
  if (localStorage.state === "4") {
    htm.className = ""
    cs.className = ""
    alert("You found a tax statement")
    localStorage.state = "5"
  }
});
interactions.addEventListener ("click", function (event) {
  if (localStorage.state === "7") {
    cs.className = ""
  htm.className = ""
    js.className = ""
    alert("You found the latest revenue report")
    localStorage.state = "8"
  }
});