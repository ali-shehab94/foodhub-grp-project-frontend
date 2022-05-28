//get gender
function () {
    if ($('#male').is(':checked')){
        return 0
    }
    else if ($('#female').is(':checked')){
        return 1
    }
    else if ($('#other').is(':checked')){
        return 2
    }
}





$("#sign-up-btn").click(function(){
    let data = new FormData();
data.append('first_name', $("#firstnametxt").val());
data.append('last_name', $("#lastnametxt").val());
data.append('username', $("#usernametxt").val());
data.append('dob', $("#dob").val());
//check gender
data.append('gender', $("#gender").val());
data.append('email', $("#lastnametxt").val());
data.append('password', $("#firstnametxt").val());
data.append('phone_number', $("#lastnametxt").val());
data.append('address', $("#lastnametxt").val());

axios({
 method: 'post',
 url: 'http://localhost/foodhubphp/insertuser.php',
 data: data,
})

.then(function (response) {
 console.log("received  ");
 if (response.status==200){
     window.location.replace("http://localhost/foodhubhtml/bla.php");
 }else {
     console.log('response error with status code = ' + response.status)
 }
 
 }
)});