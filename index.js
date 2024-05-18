let oyna = document.querySelector('.oyna')

function oynaga(input){
 oyna.value += input;
}

function tozalash() {
    oyna.value = ''
}

function calculator() {
   try {
    oyna.value = eval(oyna.value);
   } catch (error) {
    oyna.value = 'Eror!';
   }
}