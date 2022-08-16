let submit = document.getElementById('submit')

submit.onclick = (event) =>{
    event.preventDefault();
    let color = document.getElementById('color').value
    
    document.body.style.backgroundColor = color
}
