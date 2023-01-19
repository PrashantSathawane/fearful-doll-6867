let sowcolor = document.getElementById('input')
let inputvalue = document.getElementById('EmailInput')
let heading = document.getElementById('heading')
let btn = document.getElementById('btn')


let maillist=JSON.parse(localStorage.getItem('User-mail'))||[]
console.log(maillist);
function changecolor() {
    sowcolor.classList.add('Input')
}

inputvalue.addEventListener('input', () => {

    let value = inputvalue.value;


    if (value.length > 10 && value.includes('@' && '.com')) {

        heading.innerText = ""

        sowcolor.classList.remove('rong')
        btn.classList.add('Btn')
        btn.addEventListener('click', () => {
     window.location.assign('./EmailPass.html')

        })
       maillist.push(value) 
            localStorage.setItem('User-mail',JSON.stringify(maillist))
    }

    else {

        heading.innerText = 'Enter a valid email id'
        sowcolor.classList.add('rong')
        btn.classList.remove('Btn')

    }


})

