const headerAdvice=document.querySelector('.advicetest');


const url = 'https://api.adviceslip.com/advice';


// Get Random
const getAdvice = async () => {
  get('spin').style.display = 'inline-block';
  try {
    const res = await fetch(url);
    const data = await res.json(); 
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ok=getAdvice();

console.log(ok.data.slip)