// getting the elements from the HTML
let individualCarcard = document.getElementById("car-search-result");







// fetched car details
fetCarDetails()
function fetCarDetails() {
    let promise = fetch("https://63c634eb4ebaa80285414b4d.mockapi.io/Cars")


    promise.then((res) => {
        return res.json()
    })
        .then((data) => {
            // console.log(data);
            showMadeCards(data);
        })
        .catch((err) => {
            console.log(err);
        })
}





// function that gives individual car details as a card
function makeasCards(CarImage,Rating,Cartype,Seats, CarTitle,totalTravel,fuelType,transmission, CarPrice) {
    let marketPrice = 1 + CarPrice 
   
    let card =
    `
    <div class="individual-card">

        <div class="images-ratings-gobtn">
          <div id="Representational-image">Representational Image</div>
          <img src=${CarImage} class="CarImages">
         <div class="rating-and-gobtn">
           <div>
             <span>⭐</span>
             <span style="color:gray">${Rating}</span>
           </div>
           <button class="arrowbtn">➡️</button>
         </div>
       </div>


        <div class="car-details-title-subdetails">
           <h3 style="display:inline">${CarTitle}  (${totalTravel})</h3>
           <br>
            <span style="color:gray">${fuelType}  </span> 
             <span style="color:gray"> • ${transmission}</span>
            <span style="color:gray"> • ${Cartype}</span> 
            <span style="color:gray"> • ${Seats}</span>
        </div>


        <div class="car-detail-revenue">
        <h3 style="display:inline">₹${CarPrice}</h3>      
         <del style="color:gray">₹${marketPrice}</del>
        </div>

   </div>
    `
      return card;
}




// function to append the designed cards
function showMadeCards(fetCarDetailsData){
    console.log(fetCarDetailsData)
    let listOfcards = 
    fetCarDetailsData.map((item)=> makeasCards(item.images,item.rating,item.carType,item.Seats,item.title,item.totalTravel,item.fuelType,item.transmission,item.price)).join("");

individualCarcard.innerHTML = listOfcards;
  
}