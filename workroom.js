/* function grade() {
    var result = Math.floor (Math.random() * 10);
}; */
const crunched = document.getElementById('crunched')
const interactions = document.getElementById('interactions')
const structure = document.getElementById('structure')
const styling = document.getElementById('styling')
const book = document.getElementById("book")
const htm = document.getElementById('html')
const cs = document.getElementById('css')
const js = document.getElementById('js')
const randomNumber = Math.floor(Math.random() * 10);
const message = document.getElementById('message')
/* crunch.addEventListener ("click", (ev) => { 
console.log(localStorage.getItem('state')); */

/* book.addEventListener ("click", bo => {
if (localStorage.state === "8") {
  js.className = "";
  cs.className = "";
  htm.className = "";
} else if (localStorage.state === "5") {
  cs.className = "";
  htm.className = "";
} else if (localStorage.state === "2") {
  htm.className = "";
}}); */

crunched.addEventListener ("click", (event) => {
  if (localStorage.state === "8" && randomNumber >= 6) {
    alert("Congratulations! You have finished this task!")
    message.innerHTML = "You got " + randomNumber + "!"
    localStorage.state = "9";
    } else if (localStorage.state === "8" && randomNumber < 6) {
      alert ("The computer won't boot up!")
      message.innerHTML = "You got " + randomNumber + "!"
      /* location.reload(true); */
    } else if (localStorage.state === "5" && randomNumber >= 6) {
      alert("Congratulations! You have finished this task!")
      message.innerHTML = "You got " + randomNumber + "!"
      localStorage.state = "6"
    } else if (localStorage.state === "5" && randomNumber < 6) {
      alert ("The computer won't boot up!")
      message.innerHTML = "You got " + randomNumber + "!"
      /* location.reload(true); */
    } else if (localStorage.state === "2" && randomNumber >= 6) {
    alert("Congratulations! You have finished this task!")
    message.innerHTML = "You got " + randomNumber + "!"
    localStorage.state = "3";
  } else if (localStorage.state === "2" && randomNumber < 6) {
    alert ("The computer won't boot up!")
    message.innerHTML = "You got " + randomNumber + "!"
    /* location.reload(true); */
  }
});

