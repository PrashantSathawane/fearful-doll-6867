const slider = document.querySelector(".gallery");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

// navigation bar

function openNav() {
  document.getElementById("mySidenav").style.width = "30%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function AboutUs() {
  let about = document.getElementById("footer-2");
  about.innerHTML = `  <h3 >About Zoomcar</h3>
  <p>
    Zoomcar is India’s largest marketplace for cars on rent. From short road
    trips to quick in-city drives for groceries, supply pick-up, food runs,
    we have the cheapest car rental options for all your needs! A hatchback
    for daily commute, a sedan for short trips, SUV for hills or a luxury
    car for a surprise. With Zoomcar, you can experience the convenience of
    online booking. The cars listed on our platform come with all-India
    permits that include vehicle insurance. It is extremely easy to pick up
    the car from the host location. You can drive unlimited KMs, with 100%
    Free Cancellation up to 6 hours before the trip start, 0 Security
    Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per KM
    starts as low as Rs. 49/hour. From short road trips to quick in-city
    drives for groceries, supply pick-up, meeting friends and family, doctor
    visits, business trips, we have the cheapest car rental options for all
    your needs! A hatchback for daily commute, a sedan for short trips, SUV
    for hills or a luxury car for a surprise.
  </p>
  <h3>Why Zoomcar?</h3>
  <p>
    You must never stop exploring! That’s why you get unlimited KMs with
    every booking!
  </p>
  <h4>Unlimited KMs</h4>
  <p>
    Rent a car & start traveling with zero paperwork requirements! All you
    need in your driver’s license, national ID & a live selfie!
  </p>
  <h4>No Paperwork</h4>
  <p>
    Why pay for a full day when you need the car for only 8 hours? Zoomcar
    lets you rent a car for as low as 8 hours only!
  </p>
  <h4>Short-Duration</h4>
  <p>
    Don’t put a limit to your travel plans - our long-duration bookings are
    here for you. Remember, the longer you book for, the more you save!
  </p>
  <h4>Long-Duration</h4>
  <p>
    Don’t put a limit to your travel plans - our long-duration bookings are
    here for you. Remember, the longer you book for, the more you save!
  </p>
  <h4>Keyless Access</h4>
  <p>
    No need to meet the Hosts during the beginning & end of any booking! The
    Zoommcar smart-app allows you to lock & unlock the car directly through
    the app! Zoomcar gives you the freedom of self-drive! With budget car
    rental solutions, Zoomcar offers the best offers, the cheapest prices
    and a wide range of cars to choose from. Get unlimited KMs, Free
    Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
    Assistance. Car rent per KM starts as low as Rs. 49/hour.
  </p>
  <h3>Flying Soon? We’ll Be There!</h3>
  <p>
    No waiting for cabs or fighting the fares anymore - Zoomcar provides
    Airport trip services. The airport car rent service allows you to book a
    car from the airport & drive it home. Arrive in any city worry-free! We
    assure you unbeatable prices! Car Rental in Bangalore Airport | Car
    Rental in Hyderabad Airport | Car Rental in Mumbai Airport | Car Rental
    in Delhi-NCR Airport | Car Rental in Chennai Airport | Car Rental in
    Pune Airport | Car Rental in Kolkata Airport | Car Rental in Ahmedabad
    Airport | Car Rental in Bhubaneswar Airport | Car Rental in Chandigarh
    Airport | Car Rental in Coimbatore Airport | Car Rental in Jaipur
    Airport | Car Rental in Kochi Airport | Car Rental in Mangalore Airport
    | Car Rental in Mysore Airport | Car Rental in Nagpur Airport | Car
    Rental in Surat Airport | Car Rental in Tirupati Airport | Car Rental in
    Trivandrum Airport | Car Rental in Vadodara Airport | Car Rental in
    Vijayawada Airport
  </p>
  <h3>We’ve Got A Car For All Your Needs:</h3>
  <p>
    From long durations to short distances, book a Zoomcar for all your
    needs: Rent SUV | Rent Hatchback | Rent Sedan | Rent EV
  </p>
  <h3>Anywhere, Anytime:</h3>
  <p>
    to rent in Bangalore | Cars to rent in Mumbai | Cars to rent in Delhi
    NCR |Cars to rent in Chennai |Cars to rent in Pune |Cars to rent in
    Hyderabad |Cars to rent in Chandigarh |Cars to rent in Kolkata |Cars to
    rent in Ahmedabad |Cars to rent in Coimbatore |Cars to rent in Indore
    |Cars to rent in Jaipur Cars to rent in Vizag |Cars to rent in Goa |Cars
    to rent in Nagpur |Cars to rent in Kochi |Cars to rent in Vijayawada
    |Cars to rent in Siliguri |Cars to rent in Surat |Cars to rent in Bhopal
    |Cars to rent in Bhubaneswar | Cars to rent in Lucknow |Cars to rent in
    Guwahati |Cars to rent in Vadodara |Cars to rent in Ranchi |Cars to rent
    in Patna | Cars to rent in Raipur | Cars to rent in Jodhpur |Cars to
    rent in Nashik |Cars to rent in Trichy |Cars to rent in Madurai
  </p>
  <h3>Want A Specific Car? We’ve Got It All:</h3>
  <p>
    Rent Tata Nexon | Rent Honda Jazz | Rent Hyundai Creta | Rent Maruti
    Brezza | Rent Mahindra | Rent XUV500 | Rent Hyundai Verna | Rent Maruti
    Swift | Rent Toyota Innova | Rent Reanult Kwid | Rent Maruti Baleno |
    Rent Mahindra TUV300| Rent Maruti Swift | Rent Hyundai i20 | Rent Maruti
    Ertiga | Rent Volkswagen Polo | Rent Hyundai Venue | Rent Hyundai Eon |
    Rent Maruti S-Cross | Rent Maruti | Rent Dzire | Rent Honda Amaze | Rent
    Hyundai Verna | Rent Maruti Ciaz | Rent Hyundai Creta | Rent Renault
    Triber | Rent Maruti S-Cross | Rent Toyota Innova | Rent Mahindra TUV300
    | Rent Tata Tiago | Rent Maruti Wagon R | Rent Datson Redi-Go | Rent
    Maruti Alto | Rent Hyundai Grand i10 | Rent Hyundai Xcent | Rent Maruti
    S-Presso | Rent Hyundai Santro | Rent Hyundai Verna | Rent Maruti Ignis
    | Rent Nissan Magnite | Rent Toyota Glanza | Rent Honda City | Rent
    Maruti Dzire | Rent Datson GO T | Rent Nissan Sunny | Rent Renault Kiger
    | Rent Hyundai Aura | Rent Renault Duster | Rent Mahindra Bolero | Rent
    Tata Altroz | Rent Ford EcoSport If you’re looking for cars to rent near
    you, Zoomcar is your perfect solution! Rent cars in 3 easy steps: Pick
    your date & time of travel Select the vehicle of your choice from our
    wide range of cars Book & zoom away
  </p>
  <h3>Why Book A Zoomcar?</h3>
  <p>
    Zoomcar gives you the freedom of self-drive! With the cheapest rental
    car solutions, Zoomcar has the best offers, cheapest prices and a wide
    range of cars to choose from. Get unlimited KMs, Free Cancellation, 0
    Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent
    per KM starts as low as Rs. 49/hour.
  </p>
  <h3>How To Rent A Car Through Zoomcar?</h3>
  <p>
    If you’re looking for cars to rent near you, Zoomcar is your perfect
    solution! Rent cars in 3 easy steps: Pick your date & time of travel
    Select the vehicle of your choice from our wide range of cars Book &
    zoom away Rent car & get unlimited KMs, Free Cancellation, 0 Security
    Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per KM
    starts as low as Rs. 49/hour.
  </p>
  <h3>Can Zoomcar Be Used For Interstate Travel?</h3>
  <p>
    Experience the ease of round trips with Zoomcar! All you have to do is
    enter your start & end date & time for your journey. Once you rent a
    car, you get unlimited KMs, Free Cancellation, 0 Security Deposit, 0
    Toll Charges, and 24/7 Roadside Assistance. Car rent per KM starts as
    low as Rs. 49/hour.
  </p>
  <h3>Can A Zoomcar Booking Be Cancelled?</h3>
  <p>
    With Zoomcar, you get free cancellation & free rescheduling up to 6
    hours before the trip starts. Rent cars & get unlimited KMs, Free
    Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
    Assistance. Car rent per KM starts as low as Rs. 49/hour.
  </p>
  <h3>How To Contact Zoomcar?</h3>
  <p>
    Zoomcar is the biggest budget car rental marketplace in India. Our
    executives are available to respond to your queries & solve your
    problems 24/7 through our customer support portal!
  </p>
  <h3>How To Book A Zoomcar From The Airport?</h3>
  <p>
    No waiting for cabs or fighting the fares anymore - Zoomcar provides
    Airport trip services. The airport car rent service allows you to book a
    car from the airport & drive it home. Arrive in any city worry-free! We
    assure you unbeatable prices!
  </p>
  <h3>What Are The Best Cars For Long Trips?</h3>
  <p>
    Rent an SUV or Sedan for maximum convenience! Zoomcar has many popular
    SUVs and Sedans on its platform to choose from & rent.
  </p>
  <h3>What Events Can I Rent A Zoomcar For?</h3>
  <p>
    Zoomcar provides car rentals for music events, short trips within the
    city, trips with friends, trips with family, temple visits,
    long-duration trips, short-duration trips, road trips with friends and
    family & much more! Car rental starts as low as Rs. 49/hour.
  </p>`;
}

function Blogs() {
  let about = document.getElementById("footer-2");
  about.innerHTML = `<h3>Find more information about Zoomcar Blogs <a style = "color:white;" href="">here</a></h3>`;
}
function Careers() {
  let about = document.getElementById("footer-2");
  about.innerHTML = `<h3>Find more information about Zoomcar Careers  <a style = "color:white;" href="">here</a></h3>`;
}

function Help_support() {
  let about = document.getElementById("footer-2");
  about.innerHTML = `<h3>Find more information about Zoomcar Help and support  <a style = "color:white;" href="">here</a></h3>`;
}

function locto() {
  let loc = document.getElementById("locator-1");
  loc.innerHTML = ` <div
  style="
    background-color: white;
    width: 500px;
    height: 50px;
    border: solid 1px;
    border-color: green;
    border-radius: 8px;
    margin-top: 20px;
  "
>
  <div
    style="
      display: flex;
      align-items: center;
      margin-top: 3%;
      gap: 10px;
      margin-left: 10px;
    "
  >
    <img
      style="width: 10px"
      src="https://t3.ftcdn.net/jpg/05/31/66/02/240_F_531660213_Cc7tcOlS60cGwglFgeeaPj2rmTP4KtYz.jpg"
      alt=""
    />
    <a style="color: rgb(152, 152, 152);text-decoration: none;" href="../HTML/calender.html">
    <p
      style="
        font-family: Poppins;
        text-align: center;
        font-size: 12px;
        color: rgb(152, 152, 152);
      "
    >
    
      Pick Date 10.10.2021 ---> 11.10.2021
    </p></a>
  </div>
</div>

`;
}
function locto0() {
  let syc = document.getElementById("locator-1");
  syc.innerHTML = ` `;
}
