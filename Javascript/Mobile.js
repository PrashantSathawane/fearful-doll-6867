let sowcolor = document.getElementById('input')
let inputvalue = document.getElementById('numberInput')
let heading = document.getElementById('heading')
let btn = document.getElementById('btn')

let datalist=JSON.parse(localStorage.getItem('cantact-number'))||[]
console.log(datalist);
function changecolor() {
    sowcolor.classList.add('Input')
}

inputvalue.addEventListener('input', () => {

    let value = inputvalue.value;
    if (value.length == 10) {
        heading.innerText = ""
        btn.classList.add('Btn')
        sowcolor.classList.remove('rong')
        btn.addEventListener('click', () => {
            window.location.assign('./MobileOtp.html')
            
             })

            datalist.push(value) 
            localStorage.setItem('cantact-number',JSON.stringify(datalist))
       }
    else {

        heading.innerText = 'Enter a valid mobile number'
        sowcolor.classList.add('rong')
        btn.classList.remove('Btn')
    }


})