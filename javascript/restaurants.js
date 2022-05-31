//Declaring a variable to store the response from the backend
let myResponse = '';
let mydata;
//AXIOS
axios({
 method: 'get',
 url: 'http://localhost/Food-Hub-Back-end/getRestaurants.php'
})


.then(function (response) {
    console.log(response.data);
    mydata = response.data;
    console.log(mydata)
    parseData(mydata);
})

function parseData(obj) {
    for (const data of obj) {
        console.log(data);
        let id = data.ID;
        let cuisine = data.cuisine;
        let rate = data.rating;
        let RestaurantName = data.name;
        let location = data.address
        console.log(RestaurantName);
        console.log(rate)
        console.log(cuisine)
        console.log(location)
        let element = document.getElementById("rest-card-container");
        element.innerHTML +=        `<div>
                                        <div class ='rest-card'>
                                            <img src='../assets/images/restaurants/restaurant-img.jpeg' alt='chopsticks' class='rest-thumbnail'>
                                            <h5 id='rest1name'>${RestaurantName}</h5>
                                            <div class='row-container'>
                                                <h4>${cuisine} | ${location}</h4>
                                                <h5>⭐${rate}⭐</h5>
                                            </div>
                                        </div>
                                    </div>`
                
    }
}

// `<div id="${id}"> 
//                                     <span>${id}</span> 
//                                     <span>${content}</span> 
//                                     <span>${rate}</span> 
//                                     <span>${date}</span> 
//                                     <span>${User_fname}</span> 
//                                     <span>${User_lname}</span> 
//                                     <span>${RestaurantName}</span>  
//                                     <span><i onClick= "acceptReview(this)" class="fa-solid fa-check"></i><i onClick= "deleteReview(this)" class="fa-solid fa-xmark"></i></span>  
//                                 </div>`;

// '<div class="row-container">
// <div class="homepage-card-container">
//     <div>
//         <div class ="rest-card">
//             <img src="../assets/images/restaurants/chopsticks.jpeg" alt="chopsticks" class="rest-thumbnail">
//             <h5 id="rest1name">Restaurant</h5>
//             <div class="row-container">
//                 <h4>Cuisine | Location</h4>
//                 <h5>⭐4.5⭐</h5>
//             </div>
//         </div>
//     </div>
//     <div>
//         <div class ="rest-card">
//             <img src="../assets/images/restaurants/falafel-abu-andreh.jpg" alt="falafel-abu-andreh" class="rest-thumbnail">
//             <h5>Restaurant</h5>
//             <div class="row-container">
//                 <h4>Cuisine | Location</h4>
//                 <h5>⭐4.5⭐</h5>
//             </div>
//         </div>
//     </div>
//     <div>
//         <div class ="rest-card">
//             <img src="../assets/images/restaurants/meza.jpeg" alt="meza" class="rest-thumbnail">
//             <h5>Restaurant</h5>
//             <div class="row-container">
//                 <h4>Cuisine | Location</h4>
//                 <h5>⭐4.5⭐</h5>
//             </div>
//         </div>
//     </div>
//     <div>
//         <div class ="rest-card">
//             <img src="../assets/images/restaurants/sushi-circle.jpg" alt="sushi-circle" class="rest-thumbnail">
//             <h5>Restaurant</h5>
//             <div class="row-container">
//                 <h4>Cuisine | Location</h4>
//                 <h5>⭐4.5⭐</h5>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div class="row-container">'