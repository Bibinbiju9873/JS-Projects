let count = 0;

let res = document.getElementById('res');

let decrease = document.getElementById('btn-decrease')
let reset = document.getElementById('btn-reset')
let increase = document.getElementById('btn-increase')

decrease.addEventListener('click', () => {
    count = count - 1;
    res.innerHTML = count
})

reset.addEventListener('click', () => {
    count = 0;
    res.innerHTML = count
})

increase.addEventListener('click', () => {
    count = count + 1;
    res.innerHTML = count
})
