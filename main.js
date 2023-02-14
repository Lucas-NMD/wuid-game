const gar = document.getElementById('Boss')
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
  gar.addEventListener ("click", (event) => {
  if (localStorage.state === "9") {
    alert("Great Job! Get some rest and I'll see you tomorrow!");
    localStorage.clear ();
  } else if (localStorage.state === "6") {
    alert("Since the price of our materials have increased we need to male sure that we have enough margin to cover it. Can you make a report for our next stakeholders meeting?")
    localStorage.state = "7" 
  } else if (localStorage.state === "3") {
    alert("I got confirmation that the items are on their way. Can you write them down in our tax statement?")
    localStorage.state = "4"
  } else if (localStorage.state === undefined) {
    alert("Hi, we're running short on supplies would you mind placing an order? You should find a list somewhere in the Files Room.")
    localStorage.state = "1";
  }
});

