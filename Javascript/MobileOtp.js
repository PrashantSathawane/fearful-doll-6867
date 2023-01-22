let sowcolor = document.getElementById('input')
let inputvalue = document.getElementById('numberInput')
let heading = document.getElementById('heading')
let btn = document.getElementById('btn')
let contact = document.getElementById('nomb')

let datalist = JSON.parse(localStorage.getItem('cantact-number')) || []
sowdataon(datalist)
function sowdataon(data) {
    for (let i = 0; i < data.length; i++) {

        contact.innerHTML = `OTP was sent to +91${data[i]}`
        delete datalist[i]
    }
}

var randomOtp = Math.floor(Math.random() * 1000000)

function changecolor() {
    sowcolor.classList.add('Input')
}

inputvalue.addEventListener('input', () => {

    let value = inputvalue.value;

    if (+value == randomOtp && value.length == 6) {
        heading.innerText = ""
        sowcolor.classList.remove('rong')
        btn.classList.add('Btn')
        btn.addEventListener('click', () => {



          

        })
    }
    else {
        heading.innerText = 'Enter a valid OTP'
        sowcolor.classList.add('rong')
        btn.classList.remove('Btn')

    }

})



window.setTimeout(() => {
    alert(`Your OTP is ${randomOtp}`)
}, 3000);

window.setTimeout(() => {
    alert('Your OTP is Expire in 20 Second please enter correct OTP')

}, 20000)
