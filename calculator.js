const pResult = document.querySelector('p');


function btnResult(){

    let getNumbersOnScreen = pResult.innerHTML;

    pResult.innerHTML = eval(getNumbersOnScreen);

    console.log(getNumbersOnScreen.length);

    if(getNumbersOnScreen.length === 0){

        alert('Please, type a number !');
        pResult.innerHTML = '';
    }
}

function number1(n){

    let getN2 = pResult.innerHTML;

    if(getN2.length > 10){

        console.log('Error');

    }else if(getN2.length < 10){

        pResult.innerHTML = getN2 + n;
    }

    
}
function btnDeleteOne(){

    let getResult = pResult.innerHTML;

    pResult.innerHTML = getResult.slice(0, getResult.length - 1);
}
function btnDeleteAll(){

    pResult.innerHTML = '';
    pResult.value = '';
}