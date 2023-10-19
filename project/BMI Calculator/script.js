const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const guide = document.querySelector('#weight-guide');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`;
    }else {
        let bmiValue = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmiValue}</span>`

        if(bmiValue < 18.6){
            // guide.textContent = 'underweight'
            guide.innerHTML = '<h2> Under Weight</h2>'        
        }else if(bmiValue>= 18.6 && bmiValue<=24.9){
            guide.innerHTML = '<h2>Normal Weight</h2>';
        }else if (bmiValue>24.9){
            guide.innerHTML = '<h2>Over weight</h2>';
        }
    }
    
});
