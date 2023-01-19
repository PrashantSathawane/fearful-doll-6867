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

