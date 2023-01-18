let offer= document.getElementById('offer');
let container= document.querySelector(".change-container")
offer.addEventListener('click',()=>{
    // let payOption= document.createElement("div")
    // payOption.classList.add("content")
    
    // let div1 = document.createElement("div")
  
  
    container.innerHTML= `
      <div class="content">
       <div>
         <img src="https://www.zoomcar.com/build/8d5680464072cbd2c4c881fb42ae3bf7.png">
       </div>
       <div>
        <p>
        Payment Offers </p>
        <span>Amount: ₹9394.0</span>  
       </div>
      </div>  
    `

})


let upi = document.querySelector(".upi")

upi.addEventListener('click',()=>{
    upi.style.backgroundColor="#f0f4ff"
    atm.style.backgroundColor="#ffff"
    container.innerHTML=`
     <div class="content1 first">
        <div >
          <div>
            <p>Select a UPI App</p>
            <span>Amount: ₹9987.0</span>
           </div>
          <div>
             <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png">
          </div>  
        </div>
        <div class="pre">PREFERRED PAYMENT OPTIONS</div>
        <div class="same">
          <div>
           <img src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889">
           </div>
           <div>Google Pay</div>
        </div>
        <div class="same">
        <div>
        <img src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837">
        </div>
        <div>PhonePe</div>
        </div>
        <div class="same">
        <div>
        <img src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070">
        </div>
        <div>Paytm UPI</div>
        </div>
       
     </div>  
    `
})


let atm = document.querySelector(".atm")

atm.addEventListener('click',()=>{
    atm.style.backgroundColor="#f0f4ff"
    upi.style.backgroundColor="#fff"
    container.innerHTML=`
      <div class="content2">
      <div >
      <div>
        <p>Enter Card Details</p>
        <span>Amount: ₹9987.0</span>
       </div>
      <div>
         <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png">
      </div>  
    </div>
      </div>

      <div>
         <input class="input" type="number" placeholder="Card Number">
      </div>
      <div>
         <input class="input" type="number" placeholder="Expiry (MM/YY)">
         <input class="input" type="number" palceholder="CVV">
       </div>  
    `
   

})