 function pow(x, n){
    if(n != 1){
        return x * pow(x, n-1)
    } else{
        return x
    }
}

let x = parseInt(prompt("Число:"));
let n = parseInt(prompt("Ступінь:"));
  
let result = pow(x, n);

alert(`Результат: ${result}`);



