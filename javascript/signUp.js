//get gender
let gender = null;
$("#sign-up-btn").click(function(){
    if ($('#male').is(':checked')){
        gender = 0
    }
    else if ($('#female').is(':checked')){
        gender = 1
    }
    else if ($('#other').is(':checked')){
        gender = 2
    }
})

//AXIOS
$("#sign-up-btn").click(function(){
    let data = new FormData();
data.append('first_name', $("#firstnametxt").val());
data.append('last_name', $("#lastnametxt").val());
data.append('username', $("#usernametxt").val());
data.append('dob', $("#dob").val());
//check gender
data.append('gender', gender);
data.append('email', $("#email").val());
data.append('password', $("#password").val());
data.append('phone_number', $("#phone_number").val());
data.append('address', $("#address").val());

axios({
 method: 'post',
 url: 'http://localhost/Food-Hub-Back-end/signUp.php',
 data: data,
})

.then(function (response) {
    //let parsed_response = JSON.parse(response.data);
    //console.log(parsed_response.success);
    // const myObj = JSON.parse(response);
    //console.dir(response.data);
    // console.log('object ' + myObj.name);
    // console.log('data--> ' + response.success);
    //console.log( response.data.success);
    
    //console.log("received  ");
 if (response){
     console.log("Success Hamze")
     alert('You have been succefully registered!')
     //window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
 }else {
     console.log('response error with status code = ' + response.status)
 }
 }
)});


//xampp/htdocs/foodhub-grp-project-frontend/index.html