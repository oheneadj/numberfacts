
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



//Check to see if date is selected
dateInput.addEventListener('change', getDateFact);


function getDateFact(){

    let number = dateInput.value;

    // String(number);

    const date = number.split('-');


    const url = `http://numbersapi.com/${date[1]}/${date[2]}/date`;
    fetch (url)
    .then(response => response.text())
    .then(data => {
        if(number !== '' ){
            factText.innerText = data;
        }
    })
    .catch(err => console.log(err));
}


//Check to see if button is clicked
random.addEventListener('click', getRandomFact);



function getRandomFact(){
    console.log("Button was clicked")
    const url = `http://numbersapi.com/random/trivia`;
    fetch (url)
    .then(response => response.text())
    .then(data => {
        factText.innerText = data;
    })
    .catch(err => console.log(err));
}


