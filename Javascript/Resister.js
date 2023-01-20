let sowcolor1 = document.getElementById('input1')
let sowcolor2 = document.getElementById('input2')

let inputvalue1 = document.getElementById('EmailInput1')
let inputvalue2 = document.getElementById('EmailInput2')

let heading = document.getElementById('heading')
let btn = document.getElementById('btn')


let Namelist=JSON.parse(localStorage.getItem('User-Name'))||[]
console.log(Namelist);
function changecolor1() {
    
    sowcolor1.classList.add('Input')
}
function changecolor2() {
    sowcolor2.classList.add('Input')
}

inputvalue2.addEventListener('input', () => {
    let value = inputvalue2.value;
    console.log(value);
  if (value.length > 10 && value.includes('@' && '.com')) {
        heading.innerText = ""
        sowcolor2.classList.remove('rong')
        btn.classList.add('Btn')
        btn.addEventListener('click', () => {
     window.location.assign('../index.html')

        })
      
    }
    else {
        heading.innerText = 'Enter a valid email id'
        sowcolor2.classList.add('rong')
        btn.classList.remove('Btn')
    }
})

inputvalue1.addEventListener('input', () => {
    let value1 = inputvalue1.value;
    console.log(value1);
if(value1.length>=5)
  Namelist.unshift(value1) 
  localStorage.setItem('User-Name',JSON.stringify(Namelist))
      
})
