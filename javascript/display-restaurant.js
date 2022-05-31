let restaurantId = localStorage.getItem("restaurant_id");
console.log("rest id --> " +restaurantId)


function getRestaurant() {
    let data = new FormData();
    data.append("restaurant_id", "1");
    axios({
        method: 'get',
        url: 'http://localhost/Food-Hub-Back-end/getRestaurant.php',
        data: data,
    })
}

.then(function (response) {
    console.log(response.data)
// If we got a response at all
if (response.data != null){
    console.log(response);
}else {
    console.log(response.data)
    console.log('response error with status code = ' + response);
}
})
getRestaurant();



// function parseData(obj) {
//     for (const data of obj) {
//         console.log(data);
//         let cuisine = data.cuisine;
//         let rate = data.rating;
//         let RestaurantName = data.name;
//         let location = data.address
//         console.log(id)
//         console.log(RestaurantName);
//         console.log(rate)
//         console.log(cuisine)
//         console.log(location)
//         let element = document.getElementById("rest-card-container");
//         element.innerHTML += 
                
//     }
// }


// function parseData(obj) {
//     for (const data of obj) {
//         console.log(data);
//         let id = data.restaurant_id;
//         let cuisine = data.cuisine;
//         let rate = data.rating;
//         let RestaurantName = data.name;
//         let location = data.address
//         console.log(id)
//         console.log(RestaurantName);
//         console.log(rate)
//         console.log(cuisine)
//         console.log(location)
//         let element = document.getElementById("rest-card-container");
//     }
// }
 