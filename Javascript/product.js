// getting the elements from the HTML
let individualCarcard = document.getElementById("car-search-result");
let search_input_Bar = document.getElementById("search-car-input");
let Search_car_by_btn = document.getElementById("Search-car-by-btn");

const api_url = "https://63c634eb4ebaa80285414b4d.mockapi.io/Cars"

let catch_icon_div_add_function = document.getElementsByClassName("catch-and-addfunctionality");
let needTosortArr = [];





// fetched car details
fetCarDetails(api_url, search_input_Bar.value)
function fetCarDetails(para, Searchstr) {
  let promise = fetch(para + `/?search=${Searchstr}`)


  promise.then((res) => {
    return res.json()
  })
    .then((data) => {
      console.log(data);
      needTosortArr = data;
      showMadeCards(data);
    })
    .catch((err) => {
      console.log(err);
    })
}





// function that gives individual car details as a card
function makeasCards(CarImage, Rating, Cartype, Seats, CarTitle, totalTravel, fuelType, transmission, CarPrice) {
  let marketPrice = +CarPrice + 1000;
  let obj = {
    CarImage,
    Rating,
    Cartype,
    Seats,
    CarTitle,
    totalTravel,
    fuelType,
    transmission,
    CarPrice
  }

  let card =
    `
    <div class="individual-card">

        <div class="images-ratings-gobtn" onclick='SendIndividualData(${JSON.stringify(obj)})'>
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
function showMadeCards(fetCarDetailsData) {
  // console.log(fetCarDetailsData)
  individualCarcard.innerHTML = null;

  let listOfcards =
    fetCarDetailsData.map((item) => makeasCards(item.images, item.rating, item.carType, item.Seats, item.title, item.totalTravel, item.fuelType, item.transmission, item.price)).join("");

  individualCarcard.innerHTML = listOfcards;

}




// search functionality;
Search_car_by_btn.addEventListener("click", () => {
  fetCarDetails(api_url, search_input_Bar.value);
})



// keydown on the input bar to handle the situation when input bar is going to be empty
search_input_Bar.addEventListener("keydown", () => {
  fetCarDetails(api_url, "");
})





// function to send the individual data to the local storage to show on the individual product page
function SendIndividualData(obj) {
  let arr = [];
  arr.push(obj);
  localStorage.setItem("Individual_car_data", JSON.stringify(arr));
  window.location.assign("./individualproduct.html");
}




// sort functionality

// individual function to sort the data

let sortArr = needTosortArr;
// relavance sort function
function RelavanceSort(Rel) {
  // console.log(Rel)
}


// High to low sort function
function AtoZSort(HtoL) {
   sortArr = needTosortArr.sort((a, b) => { return b.price - a.price });
  showMadeCards(sortArr);
}


// Low to High sort function
function ZtoASort(LtoH) {
   sortArr = needTosortArr.sort((a, b) => { return a.price - b.price });
  showMadeCards(sortArr);
}


// Rating sort function
function RatingSort(bestRated) {
   sortArr = needTosortArr.sort((a, b) => { return b.ratestar - a.ratestar });
  showMadeCards(sortArr);
}


// distance sort function
function DistanceSort(Distance) {
  // console.log(Distance);
}


// Carage sort function
function CarAgeSort(CarAge) {
  // console.log(CarAge);
}


// Kms driven sort function
function KmsDrivenSort(KmsDriven) {
   sortArr = needTosortArr.sort((a, b) => { return a.totalTravelSort - b.totalTravelSort });
  showMadeCards(needTossortArrortArr);
  // console.log(KmsDriven);
}

// Popularity sort function
function PopularitySort(Popularity) {
   sortArr = needTosortArr.sort((a, b) => { return b.ratingSort - a.ratingSort });
  showMadeCards(sortArr);
  // console.log(Popularity)
}
// sort part ends



// filter part starts here
// various functions to filter

// filter the hatchback cars
function filterHatchBack(a) {
  sortArr = sortArr.filter((item) => item.carType == "Sedan");
  showMadeCards(sortArr);
  console.log(sortArr);
}

// filter the Sedan;
function filterSedan(a) {
  sortArr =  sortArr.filter((item) => item.carType == a);
  showMadeCards(sortArr);
  console.log(sortArr);
}


// filter the SUV;
function filterSUV(a) {
  sortArr = sortArr.filter((item) => item.carType == a);
  showMadeCards(sortArr);
  console.log(sortArr);
}








