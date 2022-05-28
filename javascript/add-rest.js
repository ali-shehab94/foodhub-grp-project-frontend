//AXIOS
$("#submit-rest").click(function(){
    let data = new FormData();
data.append('name', $("#rest-name").val());
data.append('description', $("#rest-description").val());
data.append('phone_number', $("#rest-phone").val());
//check gender
data.append('vegan_option', $("#vegan").val());
data.append('wifi', $("#wifi").val());
data.append('indoor_seating', $("#indoor").val());
data.append('opening_hr', $("#opening-hr").val());
data.append('closing_hr', $("#closing-hr").val());
data.append('address', $("#rest-address").val());
data.append('cuisine', $("#cuisine").val());

axios({
 method: 'post',
 url: 'http://localhost/Food-Hub-Back-end/.php',
 data: data,
})

.then(function (response) {
    console.log(response);
    //console.log("received  ");
 if (response.data['success']==true){
     console.log("Success Hamze")
     alert('You have been succefully registered!')
     window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
 }else {
     console.log('response error with status code = ' + response.status)
 }
 }
)});


//xampp/htdocs/foodhub-grp-project-frontend/index.html