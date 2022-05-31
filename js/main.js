const numbers = document.querySelector('.numbers-container');
const countdown = document.getElementById('countdown');
const start = document.getElementById("start");

randomNumber = [];



start.addEventListener ("click", function() {

    for (let i = 0; i < 5; i++) {
    const createRandomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumber.push(createRandomNumber);

    const numberCell = document.createElement('div');
    numberCell.classList.add('number-cell');
    numberCell.innerText = randomNumber[i];

    numbers.appendChild(numberCell);
}
console.log(randomNumber);
});



const timer = setTimeout(countdownTimer, 1000 * 5);

function countdownTimer() {
    numbers.style.display = "none";
}



// console.log(numberGenerator());
// console.log(randomNumber);


// numbers.appendChild(numberCell);



