let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

document.getElementById('submit').onclick = (event) => {
    event.preventDefault();

    let color = "#";

    for(let i=0;i<6;i++){
        color += hex[randomNumber()];
    }
    
    document.body.style.backgroundColor = color;
    document.getElementById('val').innerHTML = color
}

function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}