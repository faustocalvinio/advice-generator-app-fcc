const headerAdvice=document.querySelector('.advicetest');


let test=fetch('https://api.adviceslip.com/advice').then(resp=>{console.log(resp)});


console.log(test)