// Generowanie przypadkowych 1000 kodów

const chars = 'ABCDEFGHIJK0123456789';

const btn = document.querySelector('button');

const section = document.querySelector('section');

const codesNumber = 1000;

const charsNumber = 10;


const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    // const code ="tekst";
    for (let i = 0; i < charsNumber; i++) {
      const index = Math.floor(Math.random() * 20)
      // console.log(index);
      // code += "1";
      code += chars[index];
    }
    const div = document.createElement('div');
    div.textContent = code;
    section.appendChild(div)
  }
}
btn.addEventListener('click', codesGenerator)