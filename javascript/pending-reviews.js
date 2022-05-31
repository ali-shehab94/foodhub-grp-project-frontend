
let mydata;
let myresponse;
//AXIOS
$("#test").click(function(){
    console.log('hello');
    axios({
     method: 'get',
     url: 'http://localhost/Food-Hub-Back-end/getPendingReviews.php',
    })
    .then(function (response) {
        console.log('hello');
        mydata = response.data;
        parseData(mydata);
     if (response){
        //do something
     }else {
         console.log('response error with status code = ' + response.status);
     }
     })
});

function parseData(obj) {
    for (const data of obj) {
        console.log(data);
        console.log(data.ID);
        let id = data.ID;
        let content = data.content;
        let rate = data.rate;
        let date = data.date;
        let User_fname = data.User_fname;
        let User_lname = data.User_lname;
        let RestaurantName = data.RestaurantName;
        let container = document.getElementById("container");
        container.innerHTML += `<div id="${id}"> 
                                    <span>${id}</span> 
                                    <span>${content}</span> 
                                    <span>${rate}</span> 
                                    <span>${date}</span> 
                                    <span>${User_fname}</span> 
                                    <span>${User_lname}</span> 
                                    <span>${RestaurantName}</span>  
                                    <span><i onClick= "acceptReview(this)" class="fa-solid fa-check"></i><i onClick= "deleteReview(this)" class="fa-solid fa-xmark"></i></span>  
                                </div>`;
        
    }
}

let acceptReview = (e) => {
    let id = e.parentElement.parentElement.id;
    console.log(id);
    console.log(e);
    e.parentElement.parentElement.remove();
    sendAcceptRequest(id);
}

let deleteReview = (e) => {
    let id = e.parentElement.parentElement.id;
    e.parentElement.parentElement.remove();
    sendDeleteRequest(id);
}

function sendAcceptRequest(id){
    let data = new FormData();
    data.append('idreview', id);
    axios({
    method: 'post',
    url: 'http://localhost/Food-Hub-Back-end/acceptReview.php',
    data: data,
    })
}

function sendDeleteRequest(id){
    let data = new FormData();
    data.append('idreview', id);
    axios({
    method: 'post',
    url: 'http://localhost/Food-Hub-Back-end/declineReview.php',
    data: data,
    })
}
