let sowcolor = document.getElementById('input')
let inputvalue = document.getElementById('EmailInput')
let heading = document.getElementById('heading')
let btn = document.getElementById('btn')
let maildata=document.getElementById('mail')
let sowpass=document.querySelector('.showHidePw')
sowpass.addEventListener('click',()=>{
    if(inputvalue.type==='password'){
        inputvalue.type='text'
    }else{
        inputvalue.type='password'
    }
})


let maillist=JSON.parse(localStorage.getItem('User-mail'))||[]
console.log(maillist);
 sowmailOnDOM(maillist)
function sowmailOnDOM(data){
    for(let i=0;i<data.length;i++){
    
    maildata.innerHTML=`Associated with ${data[i]}`
      delete maillist[i]
  }
}

function changecolor() {
    sowcolor.classList.add('Input')
}

inputvalue.addEventListener('input', () => {

    let value = inputvalue.value;

    if (0 < value.length < 9) {

        heading.innerText = ""

        sowcolor.classList.remove('rong')
        btn.classList.add('Btn')
        btn.addEventListener('click', () => {

            window.location.assign('../HTML/user-index.html')

        })

    }



})

