
const LoginPage=document.querySelector('.Login-symbol')


let sowcolor1 = document.getElementById('input1')
let sowcolor2 = document.getElementById('input2')

let inputvalue1 = document.getElementById('EmailInput1')
let inputvalue2 = document.getElementById('EmailInput2')

let heading = document.getElementById('heading')
let btn = document.getElementById('btn')


let Namelist=JSON.parse(localStorage.getItem('User-Name'))||[]
let Emaillist=JSON.parse(localStorage.getItem('Email-data'))||[]

// console.log(Namelist);
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
    //  window.location.assign('../index.html')
    //  LoginPage.innerHTML='up'
    Popup.classList.add('open-popup')
        })

       
            Emaillist.push(value)
       
        localStorage.setItem('Email-data',JSON.stringify( Emaillist))

      
    }
    else {
        heading.innerText = 'Enter a valid email id'
        sowcolor2.classList.add('rong')
        btn.classList.remove('Btn')
    }
})

inputvalue1.addEventListener('input', () => {
    let value1 = inputvalue1.value;
  
if(value1.length>=5)


    Namelist.push(value1) 
    


  localStorage.setItem('User-Name',JSON.stringify(Namelist))
    
})

let Popup=document.getElementById('popup')

// function openpopup() {
//     Popup.classList.add('open-popup')
// }
function closepopup(){
    Popup.classList.remove('open-popup')
    window.location.assign('../index.html')
}