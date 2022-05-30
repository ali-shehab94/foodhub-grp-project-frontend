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

let first_name = $("#firstnametxt").val();
console.log('first: ' +first_name);
console.log('!first: ' +!first_name);

//check if empty
//get elements values:
function validateEntries(){
    let first_name = $("#firstnametxt").val();
    let last_name = $("#lastnametxt").val();
    let username = $("#usernametxt").val();
    let dob = $("#dob").val();
    let gender_ = gender > -1;
    let email = $("#email").val();
    let password = $("#password").val();
    let phone_number = $("#phone_number").val();
    let address = $("#address").val();
    console.log(!first_name);console.log(last_name);console.log(username);console.log(dob);console.log(!gender_);console.log(email);console.log(password);console.log(address);console.log(phone_number);
    if (!first_name || !last_name ||!username ||!dob ||!gender_ ||!email ||!password ||!address || !phone_number ) {
        alert("Missing values! Please fill all sections.");
        return false
    }
    else{
        return true; 
    }   
}

//AXIOS
$("#sign-up-btn").click(function(){
    //Check if entries are empty
    if(validateEntries()){

    let data = new FormData();
data.append('first_name', $("#firstnametxt").val());
data.append('last_name', $("#lastnametxt").val());
data.append('username', $("#usernametxt").val());
data.append('dob', $("#dob").val());
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
    if (response){
     console.log("Success Hamze")
     alert('You have been succefully registered!')
     window.location.href = "sign-in.html";
     //window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
    }else {
     console.log('response error with status code = ' + response.status)
    }
 })
}
});


 
    
