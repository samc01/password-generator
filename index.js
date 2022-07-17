const charArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let pass = ''
let passwordArray = []

const firstEl = document.getElementById('first')
const secondEl = document.getElementById('second')
const thirdEl = document.getElementById('third')
const fourthEl = document.getElementById('fourth')

const selection = document.getElementById('select')

function generatePass() {   
    const numbr = selection.value
    
    for (let j = 1; j < 5; j++) {  
        for (let i = 1; i <= numbr; i++) {
            let rdm = Math.floor(Math.random()*charArray.length)
            pass += charArray[rdm]
        }
        passwordArray.push(pass)
        pass = ''  
    }
    firstEl.textContent = passwordArray[0]
    secondEl.textContent = passwordArray[1]
    thirdEl.textContent = passwordArray[2]
    fourthEl.textContent = passwordArray[3]
    passwordArray = []
}

firstEl.addEventListener("click", () => copyToClipboard(firstEl.textContent))
secondEl.addEventListener("click", () => copyToClipboard(secondEl.textContent))
thirdEl.addEventListener("click", () => copyToClipboard(thirdEl.textContent))
fourthEl.addEventListener("click", () => copyToClipboard(fourthEl.textContent))

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
