
//Set factText Variable
let factText = document.querySelector('#factText');

//Set NumberInput Variable
let numberInput = document.querySelector('#numberInput');

//Check to see of number is enetered into input
numberInput.addEventListener('input', getNumberFact);


function getNumberFact(){

    let number = numberInput.value;

    const url = `http://numbersapi.com/${number}`;
    fetch (url)
    .then(response => response.text())
    .then(data => {
        if(number !== '' ){
            factText.innerText = data;
        }
    })
    .catch(err => console.log(err));
}




