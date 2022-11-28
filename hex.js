const hex = [0,1,2,3,4,5,6,7,8,9,'A','B', 'C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random between 0 - 3 
    let x = '#';
    let y = document.getElementById("userText").value;
    let z = x+y;
    if (y !== ''){
        color.textContent = z;
        document.body.style.backgroundColor = z;
    }

    else{
    let hexColor = '#';
    let maxLimit = hex.length;
    let randomNumber = Math.floor(Math. random() * maxLimit);
    console.log(randomNumber);
    for (let i = 0; i<6 ; i++ ){
        hexColor += hex[randomNumber];
        randomNumber = Math.floor(Math. random() * maxLimit);
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    }   
});