const form = document.getElementById ('form');
 form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomvalue( ) {
        return Math.round(Math.random() * this.max);
    }
    }

let  numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativas:' + value
};

function handleSubmit(e) {
   e.preventDefaut();

   let kick = document.getElementById('kick') .value;

   if(!kick) {
    alert('Digite algum valor')
    return;
   };

   updateAttempt(attempt, ++Guess.attemptsNumber);

   if(numberDrawn == kick) {
         playAgain();
         alert.innerHTML = 'Parabens você acertou !';
   }

   if(numberDrawn > kick) {
    playAgain();
    alert.innerHTML = 'O número é maior';
}

if(numberDrawn < kick) {
    playAgain();
    alert.innerHTML = 'O número é menor';
}

};

function playAgain() {
    document.getElementById('btnRestart').style.display= 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick') .value = '';
};