const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // e.preventDefault();
        if(e.target.id === 'grey'){
            body.style.backgroundColor='#808080';
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor='#ffffff';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor='blue';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
    })
})