
$("#submit-review").click(function(){
    console.log("clicked")
    axios({
        method: 'post',
        url: 'http://localhost/Food-Hub-Back-end/addReview.php',
        data: data,
       })


        let data = new FormData();
        data.append(localStorage.getItem("restaurant_id"));
        data.append('content', $("#review").val());
        data.append('rate', $("#rating").val());
})

.then(function (response) {
    console.log(response);
    //console.log("received  ");
    if (response.data['success']==true){
        console.log("Success")
        alert('Thank you for reviewing this restaurant. Your review is now pending approval.')
    }else {
        console.log('response error with status code = ' + response.status)
    }
})
 