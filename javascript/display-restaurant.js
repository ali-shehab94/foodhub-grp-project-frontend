
let restaurantId = localStorage.getItem("restaurant_id");
console.log("rest id --> " +restaurantId)
let user_fname = localStorage.getItem("user_first_name");
// Display user name:
document.getElementById("user_name").innerHTML = user_fname + "  ";


// getRestaurant from server
let data = new FormData();
data.append("restaurant_id", localStorage.getItem("restaurant_id"));
axios({
    method: 'post',
    url: 'http://localhost/Food-Hub-Back-end/getRestaurantAndRate.php',
    data: data,
})

.then(function (response) {
    console.log(response.data);
// If we got a response at all
if (response.data != null){
    console.log("we're here!");

    displayContent(response.data);
}else {
    console.log(response.data)
    console.log('response error with status code = ' + response);
}
})


function displayContent(obj) {
    for (const data of obj) {
        console.log(data);
        let id = data.restaurant_id;
        let cuisine = data.cuisine;
        let rate = data.rate;
        let RestaurantName = data.name;
        let location = data.address;
        let description = data.description;
        let vegan_option = convertToText(data.vegan_option);
        let wifi = convertToText(data.wifi);
        let phone_number = data.phone_number;
        let indoor_seating = convertToText(data.indoor_seating);
        let opening_hr = data.opening_hr;
        let closing_hr = data.closing_hr;
        let element = document.getElementById("display-restaurant-here");
        element.innerHTML = `<div class="restaurant-container">
                                <div>
                                    <div class="rest-profile">
                                        <img src="../assets/images/restaurants/restaurant-img.jpeg" alt="img" class="rest-thumbnail">
                                        <div class="rest-description">
                                            <br>
                                            <h1 id="name">Name: ${RestaurantName}</h1>
                                            <br>
                                            <h2 id="cuisine">Cuisine: ${cuisine}</h2>
                                            <br>
                                            <h2 id="address">Address: ${location}</h2>
                                            <h3></h3>
                                        </div>
                                    </div>
                                    <h4 class="opening-hrs" id="operating-hrs">Opens form ${opening_hr} to ${closing_hr} </h4>
                                    <h4 class="opening-hrs" id="phone-number">Call us on: ${phone_number}</h4>
                                </div>
                            </div>
                            <div class="restaurant-section2">
                                <h1>About This Restaurant</h1>
                                <div style="display:inline-block">
                                    <h1>Cuisine: ${cuisine}</h1>
                                    <h1>Vegan Options: ${vegan_option}</h1>
                                    <h1>Wifi: ${wifi}</h1>
                                    <h1>Outdoors: ${indoor_seating}</h1>
                                </div>
                                <div>
                                    <h1>Rate: ${rate}</h1>
                                </div>
                            </div>`
    }
}
 
// Used for values like is-open = 0 => No
function convertToText(num){
    if (num==0){
        return "No";
    }else if (num==1){
        return "Yes";
    }
}


//Rate Restaurant section
$("#submit-review").click(function(){
    let data = new FormData();
    data.append('content', $("#review").val());
    data.append('rate', $("#rating").val());
    data.append('user_id', localStorage.getItem("user_id"));
    data.append("restaurant_id", localStorage.getItem("restaurant_id"));
    
    axios({
        method: 'post',
        url: 'http://localhost/Food-Hub-Back-end/addReview.php',
        data: data,
    })

    .then(function (response) {
        console.log(response.data);
    // If we got a response at all
    if (response.data != null){
        alert('Review has been sent!')
    }else {
        console.log(response.data)
        console.log('response error with status code = ' + response);
    }
    })
})

