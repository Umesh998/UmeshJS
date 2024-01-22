
//addition
function addition() {
    let value1 = document.getElementById('Box1');
    let value2 = document.getElementById('Box2');


    let totalvalue1 = Number(value1.value) + Number(value2.value);

    document.getElementById('lbl1').innerText = totalvalue1;
}


//multiplication
function multiplication() {
    let value3 = document.getElementById('Box3');
    let value4 = document.getElementById('Box4');

    let totalvalue2 = Number(value3.value) * Number(value4.value);

    document.getElementById('lbl2').innerText = totalvalue2;
}


//subtraction
function subtraction() {
    let value5 = document.getElementById('Box5');
    let value6 = document.getElementById('Box6');

    let totalvalue3 = Number(value5.value) - Number(value6.value);

    document.getElementById('lbl3').innerText = totalvalue3;
}


//division
function division() {
    let value7 = document.getElementById('Box7');
    let value8 = document.getElementById('Box8');

    let totalvalue4 = Number(value7.value) / Number(value8.value);

    document.getElementById('lbl4').innerText = totalvalue4;
}