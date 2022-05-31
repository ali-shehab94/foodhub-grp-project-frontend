// $("#submit-rest").click(function(){
    
// console.log($("#rest-name").val());
// console.log($("#rest-description").val()) ;
// console.log($("#rest-phone").val());
// console.log($("#vegan").val()) ;
// console.log($("#wifi").val()) ;
// console.log($("#indoor").val());
// console.log($("#opening-hr").val()) ;
// console.log($("#closing-hr").val());
// console.log($("#rest-address").val()) ;
// console.log($("#cuisine").val()) ;
// })

//AXIOS
$("#submit-rest").click(function(){
    let data = new FormData();
    data.append('name', $("#rest-name").val());
    data.append('description', $("#rest-description").val());
    data.append('phone_number', $("#rest-phone").val());
    data.append('vegan_option', $("#vegan").val());
    data.append('wifi', $("#wifi").val());
    data.append('indoor_seating', $("#indoor").val());
    data.append('opening_hr', $("#opening-hr").val());
    data.append('closing_hr', $("#closing-hr").val());
    data.append('address', $("#rest-address").val());
    data.append('cuisine', $("#cuisine").val());
    data.append('rate', $("#rate").val());

    axios({
        method: 'post',
        url: 'http://localhost/Food-Hub-Back-end/addRestaurant.php',
        data: data,
    })

    .then(function (response) {
        console.log(response);
        console.log("received  ");
        if (response){
            console.log("Success hamze")
            alert('A new restaurant has been added succefully!')
            //window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
        }else {
            console.log('response error with status code = ' + response.status)
        }
    })
});


//xampp/htdocs/foodhub-grp-project-frontend/index.html