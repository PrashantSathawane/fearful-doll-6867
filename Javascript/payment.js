let offer= document.getElementById('offer');
let container= document.querySelector(".change-container")

let pickUpDate=localStorage.getItem('pickUpDate')
let pickUpTime=localStorage.getItem('pickUpTime')
let dropDate= localStorage.getItem('dropDate')
let dropTime= localStorage.getItem('dropTime')
console.log(pickUpDate,pickUpTime,dropDate,dropTime)
let UserInfOnaccountP = JSON.parse(localStorage.getItem("UserInfOnaccountP")) || []
let showUserName =  document.getElementById("showUserName")
showUserName.innerText = UserInfOnaccountP[0].userName

// document.querySelector('.pickup-time').textContent=`${pickUpDate} ${pickUpTime}`
// document.querySelector('.drop-time').textContent=`${dropDate} ${dropTime}`

var car=JSON.parse(localStorage.getItem("Individual_car_data"));
let carname;
let carprice = localStorage.getItem("updatedPrice");
let carimage;
let transmission;
let fualtype;
car.forEach(el =>{
    carname=el.CarTitle;
    // carprice=el.CarPrice;
    carimage=el.CarImage;
    transmission=el.transmission;
    fualtype=el.fualtype;
})

console.log(carname,carprice)
offer.addEventListener('click',()=>{
    // let payOption= document.createElement("div")
    // payOption.classList.add("content")
    
    // let div1 = document.createElement("div")
  
    paybutton.innerHTML=null;
    container.innerHTML= `
      <div class="content">
       <div>
         <img src="https://www.zoomcar.com/build/8d5680464072cbd2c4c881fb42ae3bf7.png">
       </div>
       <div>
        <p>
        Payment Offers </p>
        <span>Amount: ${carprice}.0</span>  
       </div>
      </div>  
    `

})


let upi = document.querySelector(".upi")

upi.addEventListener('click',()=>{
    upi.style.backgroundColor="#f0f4ff"
    atm.style.backgroundColor="#ffff"
    mobile.style.backgroundColor="#ffff"
    paybutton.innerHTML=null;
    
  netbanking.style.backgroundColor="#fff"
    container.innerHTML=`
     <div class="content1 first">
        <div >
          <div>
            <p>Select a UPI App</p>
            <span>Amount: ${carprice}.0</span>
           </div>
          <div>
             <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png">
          </div>  
        </div>
        <div class="pre" style="background-color: #f5f5f5">PREFERRED PAYMENT OPTIONS</div>
        <div class="same gpay">
          <div>
           <img src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889">
           </div>
           <div><p>Google Pay</p></div>
        </div>
        <div id="new-upi1"></div>
        <div class="same phonepe">
        <div>
        <img src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837">
        </div>
        <div><P>PhonePe<p></div>
        </div>
        <div id="new-upi2"></div>
        <div class="same paytmpe">
        <div>
        <img src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070">
        </div>
        <div><p>Paytm UPI<p></div>
        
        </div> 
       <div id="new-upi3"></div>
     </div>  
    `
    let container1= document.querySelector("#new-upi1")
    let container2= document.querySelector("#new-upi2")
    let container3= document.querySelector("#new-upi3")

    let upiimg= document.querySelector(".same img")
    let p= document.querySelector(".same p")
    let newupi1= document.querySelector(".gpay")
    
    newupi1.addEventListener("click",()=>{
      newupi2.style.backgroundColor="#fff"
    newupi3.style.backgroundColor="#fff"
       newupi1.style.backgroundColor="#f5f5f5"
      //  upiimg.style.backgroundColor="#f5f5f5"
      //  p.style.backgroundColor="#f5f5f5"  
       container2.innerHTML=null;
       container3.innerHTML=null;
       container1.innerHTML=`
        <div>
          <input id="upi-input" type="text" placeholder="Enter Upi Id">
          <button id="but1">VERIFY & PAY</button>
        </div>
       `
       let inp= document.getElementById("upi-input");
       let button= document.querySelector('#but1')
       
       inp.addEventListener('input',()=>{
        let value= inp.value;
        if( value.includes("@")){
          console.log("sovmet")
          //  button.setAttribute("class","button")
          button.style.backgroundColor="#10a310"
          // button.classList.add(".act")
            button.addEventListener('click',()=>{
              alert(`your ${carname} is booked successfully👍!`)
            setTimeout(()=>{
              window.location.href="../HTML/user-index.html"
            },500)
            
          })  
          
       }
       })
      
       


    })

    let newupi2= document.querySelector(".phonepe")
    newupi2.addEventListener("click",()=>{
      newupi1.style.backgroundColor="#fff"
    newupi3.style.backgroundColor="#fff"
       newupi2.style.backgroundColor="#f5f5f5"
      //  upiimg.style.backgroundColor="#f5f5f5"
      //  p.style.backgroundColor="#f5f5f5"  
       container1.innerHTML=null;
       container3.innerHTML=null;
       container2.innerHTML=`
        <div>
          <input id="upi-input" type="text" placeholder="Enter Upi Id">
          <button id="but1">VERIFY & PAY</button>
        </div>
       `
       let inp= document.getElementById("upi-input");
       let button= document.querySelector('#but1')
       
       inp.addEventListener('input',()=>{
        let value= inp.value;
        if( value.includes("@")){
         
          //  button.setAttribute("class","button")
          button.style.backgroundColor="#10a310"
          // button.classList.add(".act")
            button.addEventListener('click',()=>{
              alert(`your ${carname} is booked successfully👍!`)
            setTimeout(()=>{
              window.location.href="../HTML/user-index.html"
            },500)
            
          })
          
       }
       })
      
       


    })
    let newupi3= document.querySelector(".paytmpe")
    newupi3.addEventListener("click",()=>{
      newupi2.style.backgroundColor="#fff"
    newupi1.style.backgroundColor="#fff"
       newupi3.style.backgroundColor="#f5f5f5"
      //  upiimg.style.backgroundColor="#f5f5f5"
      //  p.style.backgroundColor="#f5f5f5"  
       container1.innerHTML=null;
       container2.innerHTML=null;
       container3.innerHTML=`
        <div>
          <input id="upi-input" type="text" placeholder="Enter Upi Id">
          <button id="but1">VERIFY & PAY</button>
        </div>
       `
       let inp= document.getElementById("upi-input");
       let button= document.querySelector('#but1')
       
       inp.addEventListener('input',()=>{
        let value= inp.value;
        if( value.includes("@")){
         
          //  button.setAttribute("class","button")
          button.style.backgroundColor="#10a310"
          // button.classList.add(".act")
          button.addEventListener('click',()=>{
            alert(`your ${carname} is booked successfully👍!`)
            setTimeout(()=>{
              window.location.href="../HTML/user-index.html"
            },500)
            
          })
       }
       })
      
       


    })
})


let atm = document.querySelector(".atm")
let paybutton=document.querySelector("#payButton")
atm.addEventListener('click',()=>{
   
  
  paybutton.innerHTML=`
  <button id=paybtn>PAY ${carprice}.0</button>
   
  
`   

    atm.style.backgroundColor="#f0f4ff"
    mobile.style.backgroundColor="#ffff"
    upi.style.backgroundColor="#fff"
    
  netbanking.style.backgroundColor="#fff"
    container.innerHTML=`
      <div class="content2">
      <div>
      <div>
        <p>Enter Card Details</p>
        <span>Amount: ${carprice}.0</span>
       </div>
      <div>
         <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png">
      </div>  
    </div>
      

      <div>
         <input class="input1" type="number" placeholder="Card Number">
      </div>
      <div>
         <input class="input2" type="number" placeholder="Expiry (MM/YY)">
         <input class="input3" type="number"  placeholder="CVV">
       </div>  
       </div>
    `
   
let input= document.querySelector(".content2 .input1") 
input.addEventListener("click",()=>{
  input.style.border="2px solid #10a310"
  input2.style.border="1px solid #e0e0e0"
  input3.style.border="1px solid #e0e0e0"

})

   
let input2= document.querySelector(".content2 .input2") 
input2.addEventListener("click",()=>{
  input.style.border="1px solid #e0e0e0"
  input2.style.border="2px solid #10a310"
  input3.style.border="1px solid #e0e0e0"
})
   
let input3= document.querySelector(".content2 .input3") 
input3.addEventListener("click",()=>{
  input.style.border="1px solid #e0e0e0"
  input2.style.border="1px solid #e0e0e0"
  input3.style.border="2px solid #10a310"
})
   let value1= input.value;
   let value2=input2.value
   let value3= input3.value;
   input.addEventListener("input",()=>{
    // if(value1.length==16 && value2.length==4 && value3.length==3 ){
      let b= document.querySelector('#paybtn')
        b.style.backgroundColor="#10a310";
        b.style.color="white"
         b.addEventListener('click',()=>{
          alert(`your ${carname} is booked successfully👍!`)
            setTimeout(()=>{
              window.location.href="../HTML/user-index.html"
            },500)
            
          })  
  // }

   })
  


})

let mobile= document.querySelector(".mobile");

mobile.addEventListener('click',()=>{
  paybutton.innerHTML=null;
  atm.style.backgroundColor="#fff"
  upi.style.backgroundColor="#fff"
  mobile.style.backgroundColor="#f0f4ff"
  netbanking.style.backgroundColor="#fff"
  container.innerHTML=`
   <div class="content3">
   <div>
   <div>
     <p>Mobile Wallet</p>
     <span>Amount: ${carprice}.0</span>
    </div>
   <div>
      <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png">
   </div>  
 </div> 
 
    <div id="paytm">
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"> 
       </div>
       <div class="paytm">Paytm Wallet</div>
    </div>
   </div> 

   
  `
  let img3= document.querySelector(".img3")
  let paytmtext=document.querySelector(".paytm")
  let paytm= document.querySelector('#paytm')
  paytm.addEventListener('click',()=>{
    paytm.style.backgroundColor="#f5f5f5"
    img3.style.backgroundColor="#f5f5f5"
    paytmtext.style.backgroundColor="#f5f5f5"
    
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  ` 
   let b2= document.getElementById('paybtn')
   b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
    setTimeout(()=>{
       window.location.href="../HTML/user-index.html"
    },500)
   })
  })
})


let netbanking=document.querySelector('.net-banking')

netbanking.addEventListener('click',()=>{
  paybutton.innerHTML=null;
  netbanking.style.backgroundColor="#f0f4ff"
  mobile.style.backgroundColor="#ffff"
  upi.style.backgroundColor="#fff"
  atm.style.backgroundColor="#fff"
  container.innerHTML=`
  <div class="content4">
  <div>
  <div>
    <p>Net Banking</p>
    <span>Amount: ${carprice}.0</span>
   </div>
  <div>
     <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png">
  </div>  
</div> 
 
<div  class="bank-list" id="1">
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955"> 
       </div>
       <div class="paytm">Hdfc Bank</div>
    </div>

    <div class="bank-list" id="2"
    >
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979"> 
       </div>
       <div class="paytm">ICICI Netbanking</div>
    </div><div  class="bank-list" id="3">
    <div>
      <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931"> 
    </div>
    <div class="paytm">Axis Bank</div>
 </div>
 <div  class="bank-list" id="4">
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/cf379c07cb78c1e7bc476990125e2f2dfc48c46c.png?1584602048"> 
       </div>
       <div class="paytm">Kotak Bank</div>
    </div>
    <div  class="bank-list" id="5">
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/c60a9d56b73f754951266d949ebadaf86cc0bb3f.png?1584602027"> 
       </div>
       <div class="paytm">Yes Bank</div>
    </div>
    <div  class="bank-list" id="6">
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/b231e4ec4fc0862465537b9f916908ceb9ad8486.png?1584454582"> 
       </div>
       <div class="paytm">Canara Bank</div>
    </div>
    <div  class="bank-list" id="7">
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/27eac78721d3d14bc9df34231bce661e1d510e8f.png?1584602001"> 
       </div>
       <div class="paytm">State Bank of India</div>
    </div>
    <div  class="bank-list" id="8">
       <div>
         <img class="img3" src="https://zoomcar-assets.zoomcar.com/images/original/e240b3b08e01c6526a1e3a8eb8601f6c16e793e5.png?1584454522"> 
       </div>
       <div class="paytm">Union Bank of India</div>
    </div>
   
    </div>
    
  `
  let a=document.getElementById('1')
  let b=document.getElementById('2')
  let c=document.getElementById('3')
  let d=document.getElementById('4')
  let e=document.getElementById('5')
  let f=document.getElementById('6')
  let g=document.getElementById('7')
  let h=document.getElementById('8')

  a.addEventListener("click",()=>{
    a.style.backgroundColor="#cfd8db"
    b.style.backgroundColor="#fff"
    c.style.backgroundColor="#fff"
    d.style.backgroundColor="#fff"
    e.style.backgroundColor="#fff"
    f.style.backgroundColor="#fff"
    g.style.backgroundColor="#fff"
    h.style.backgroundColor="#fff"

    

    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `   
  
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  })
  })

  b.addEventListener("click",()=>{
    b.style.backgroundColor="#cfd8db"
    a.style.backgroundColor="#fff"
   
    c.style.backgroundColor="#fff"
    d.style.backgroundColor="#fff"
    e.style.backgroundColor="#fff"
    f.style.backgroundColor="#fff"
    g.style.backgroundColor="#fff"
    h.style.backgroundColor="#fff"
    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `  
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  }) 
  })

  c.addEventListener("click",()=>{
    c.style.backgroundColor="#cfd8db"
    a.style.backgroundColor="#fff"
    b.style.backgroundColor="#fff"
   
    d.style.backgroundColor="#fff"
    e.style.backgroundColor="#fff"
    f.style.backgroundColor="#fff"
    g.style.backgroundColor="#fff"
    h.style.backgroundColor="#fff"
    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `   
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  })
  })

  d.addEventListener("click",()=>{
    d.style.backgroundColor="#cfd8db"
    a.style.backgroundColor="#fff"
    b.style.backgroundColor="#fff"
    c.style.backgroundColor="#fff"
    
    e.style.backgroundColor="#fff"
    f.style.backgroundColor="#fff"
    g.style.backgroundColor="#fff"
    h.style.backgroundColor="#fff"
    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `   
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  })
  })

   e.addEventListener("click",()=>{
    e.style.backgroundColor="#cfd8db"
    a.style.backgroundColor="#fff"
    b.style.backgroundColor="#fff"
    c.style.backgroundColor="#fff"
    d.style.backgroundColor="#fff"
    
    f.style.backgroundColor="#fff"
    g.style.backgroundColor="#fff"
    h.style.backgroundColor="#fff"
    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `   
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{

    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  })
  })

  f.addEventListener("click",()=>{
    f.style.backgroundColor="#cfd8db"
    a.style.backgroundColor="#fff"
    b.style.backgroundColor="#fff"
    c.style.backgroundColor="#fff"
    d.style.backgroundColor="#fff"
    e.style.backgroundColor="#fff"
    
    g.style.backgroundColor="#fff"
    h.style.backgroundColor="#fff"
    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  })   
  })
  g.addEventListener("click",()=>{
    g.style.backgroundColor="#cfd8db"
    a.style.backgroundColor="#fff"
    b.style.backgroundColor="#fff"
    c.style.backgroundColor="#fff"
    d.style.backgroundColor="#fff"
    e.style.backgroundColor="#fff"
    f.style.backgroundColor="#fff"
    
    h.style.backgroundColor="#fff"
    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `   
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  })
  })

  h.addEventListener("click",()=>{
    h.style.backgroundColor="#cfd8db"
    a.style.backgroundColor="#fff"
    b.style.backgroundColor="#fff"
    c.style.backgroundColor="#fff"
    d.style.backgroundColor="#fff"
    e.style.backgroundColor="#fff"
    f.style.backgroundColor="#fff"
    g.style.backgroundColor="#fff"
   
    // document.querySelector(".paytm").style.backgroundColor="#cfd8db"
    // document.querySelector(".img3").style.backgroundColor="#cfd8db"
    paybutton.innerHTML=`
    <button id="paybtn" style="color:white; background-color:#10a310" >PAY ${carprice}.0</button>
     
  
  `   
  let b2= document.getElementById('paybtn')
  b2.addEventListener("click",()=>{
    alert(`your ${carname} is booked successfully👍!`)
   setTimeout(()=>{
      window.location.href="../HTML/user-index.html"
   },500)
  })
  })


})

document.querySelector('.finalP').textContent=`${carprice}.0`
document.querySelector('.hide-pay').textContent=`Amount: ${carprice}.0`
//box div is on the 403 line in css

let car_image=document.querySelector('.car-image')
car_image.setAttribute("src",carimage);

let car_name= document.querySelector('.car-name')
car_name.textContent=carname;

document.querySelector('.transmission').textContent=transmission;

 document.querySelector('.fual-type').textContent=fualtype;