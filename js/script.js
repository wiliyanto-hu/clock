const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const milliseconds = document.querySelector("#milliseconds");
const start = document.querySelector("#start");
const stopu = document.querySelector("#stop");
const reset = document.querySelector("#reset");

abc = setInterval(startClock, 1000);

abc;
let secondes;
let minutos;
let hoursos;

function startClock() {
  let theTime = new Date();
  secondes = theTime.getSeconds();
  minutos = theTime.getMinutes();
  hoursos = theTime.getHours();
  milliseconds.textContent = secondes;
  seconds.textContent = minutos;
  minutes.textContent = hoursos;

  if (secondes < 10) {
    milliseconds.textContent = `0${secondes}`;
  }
}
