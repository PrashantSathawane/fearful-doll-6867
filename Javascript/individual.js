// data from the product page to be shown here
let individual_data =  JSON.parse(localStorage.getItem("Individual_car_data"));

// car image, title, fuel, seats, and transmissions
let imageToset = document.getElementById("car-image-inside-div");
let carDetailsTitle = document.getElementById("car-detail-title");
let carDetailsFuel = document.getElementById("car-detail-fuel-type");
let carDetailsSeats = document.getElementById("car-detail-seat-type");
let carDetailsTransmission = document.getElementById("car-detail-transmission-type");

// driver details
let driverDetailsName = document.getElementById("driver-details-driver-name");


// rating and the distance details
let ratingAndDistanceRating = document.getElementById("rating-and-distance-rating");
let ratingAndDistanceDistance = document.getElementById("rating-and-distance-distance");

let coupon_btn_section_text = document.getElementById("coupon_btn_section_text");
let proceed_to_pay_btn = document.getElementById("proceed-to-pay-btn");
let Standard_221 = document.getElementById("Standard(₹221)");
let PeaceofMind_265 = document.getElementById("PeaceofMind(₹265)");
let carprice = individual_data[0].CarPrice;
proceed_to_pay_btn.innerText = `Proceed to pay ₹${carprice}`
coupon_btn_section_text.innerText = "₹" + carprice;



let c = 0;
let p = 0;
let checker_for_2nd_radio = 0;
let checker_for_1st_radio = 0;
// first radio
Standard_221.addEventListener("click", () => {
    if (checker_for_1st_radio == 0) {
        let display_price = carprice;
        if (Standard_221.checked === true && c == 0) {

            display_price = +carprice - 221;
            proceed_to_pay_btn.innerText = `Proceed to pay ₹${display_price}`
            coupon_btn_section_text.innerText = "₹" + display_price;
            c = 1
            checker_for_2nd_radio = 1;
            PeaceofMind_265.checked = false;
            PeaceofMind_265.innerHTML = null;

        }
        else if (Standard_221.checked === true && c == 1) {
            proceed_to_pay_btn.innerText = `Proceed to pay ₹${carprice}`
            coupon_btn_section_text.innerText = "₹" + carprice;
            Standard_221.checked = false;
            c = 0;
            checker_for_2nd_radio = 0;
        }

    }else{
        Standard_221.checked = false;
        Standard_221.innerHTML = null;
    }
});


// second radio

PeaceofMind_265.addEventListener("click", () => {
    if (checker_for_2nd_radio == 0) {

        let display_price = carprice;

        if (PeaceofMind_265.checked === true && p == 0) {
            display_price = +carprice - 265;
            proceed_to_pay_btn.innerText = `Proceed to pay ₹${display_price}`
            coupon_btn_section_text.innerText = "₹" + display_price;
            p = 1
            checker_for_1st_radio = 1;
            Standard_221.checked = false;
            Standard_221.innerHTML = null;

        }
        else if (PeaceofMind_265.checked === true && p == 1) {
            proceed_to_pay_btn.innerText = `Proceed to pay ₹${carprice}`
            coupon_btn_section_text.innerText = "₹" + carprice;
            PeaceofMind_265.checked = false;
            p = 0;
            checker_for_1st_radio = 0;
        }

    }else{
        PeaceofMind_265.checked = false;
        PeaceofMind_265.innerHTML = null;
    }
});




proceed_to_pay_btn.addEventListener("click", () => {
    alert("Go to next page");
})


// function to set the data on the dom using the above data from the local storage
showData()
function showData(){

    imageToset.setAttribute("src",individual_data[0].CarImage);
    carDetailsTitle.innerText = individual_data[0].CarTitle;
    carDetailsFuel.innerText = individual_data[0].fuelType+" ● ";
    carDetailsSeats.innerText = individual_data[0].Seats + " ● ";
    carDetailsTransmission.innerText = individual_data[0].transmission;
    ratingAndDistanceRating.innerText = individual_data[0].Rating+" ● ";
    ratingAndDistanceDistance.innerText = individual_data[0].totalTravel
       
 
}

