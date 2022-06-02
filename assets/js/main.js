// Schreibe eine Funktion, die beim Drücken des Buttons von 100% bis 0% runter zählt (siehe Ergebnisvorschau).
// HTML und CSS befindet sich im Kommentar.
// Nutze
// onclick x
// setInterval x
// clearInterval x
// if, else if x
// querySelector x

// let counter = 100 %;
// let timerId = setInterval(timer, 1000);
// clearInterval(timerId);

// function startCountdown() {
//     console.log("is working");
// };

let zeit = document.querySelector('.zeit')
// zeit.innerHTML = "0%";

let counter = 100;
let button = document.getElementById('btn');

// let timerId = setInterval(timer, {
//         //console.log("working?");
//         console.log(counter);
//         counter--;
//         if (counter === 0) {
//             //zeit.innerHTML = "0%"
//             clearInterval(startCountdown());
//         }
//     }, 50);
// }

//let startCountdown = () => {
// button.addEventListener('click', () => {
//     console.log(counter--);
//     counter--;
//     if (counter === 0) {
//         clearInterval(timerId);
//     }
// })

// let timerId = setInterval(timer, 50);

let startCountdown = () => {
    //console.log("Test");
    let timerId = setInterval(function start() {
        console.log(counter);
        counter--;
        zeit.innerHTML = counter + "%";
        if (counter === 0) {
            clearInterval(timerId);
            //console.log('0%');
        }
    }, 50)
}

// button.addEventListener("click", startCountdown() {
//     clearInterval(timerId);
// });