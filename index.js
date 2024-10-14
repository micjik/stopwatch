const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let ms = 0;
let s = 0;
let m = 0;
let counter;

start.addEventListener('click', function() {
    if(!counter)
    counter = setInterval(run, 10)
    function run() {
        timer.textContent = `m + : + s + : + ms`;
        ms++;
    }
})