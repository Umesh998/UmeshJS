function addition(){
    let value1 = document.getElementById('firstbox');
    let value2 = document.getElementById('secondbox');

let totalvalue = Number(value1.value) + Number(value2.value);

    document.getElementById('lbl').innerText = totalvalue;
}