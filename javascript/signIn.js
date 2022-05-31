//Declaring a variable to store the response from the backend
let myResponse = "";



//AXIOS
$("#sign-in-btn").click(function(){
    let data = new FormData();
data.append('email', $("#email").val());
data.append('password', $("#password").val());

console.log('Axios here');

axios ({
 method: 'post',
 url: 'http://localhost/Food-Hub-Back-end/signIn.php',
 data: data,
})

.then(function (response) {
    // console.log(response.data);
    // console.log(response.data.response);
    // console.log(response.data.success);
    
 if (response.data.success==true){
    handleResponse(response.data);
    //alert('You are now signed in');
    // console.log("Success");
    //window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
 }else {
    console.log('response error with status code = ' + response);
 }
 }
)});
// Parse response to check "is found", "not found", "admin"
function handleResponse(data){
    console.log(data);
    console.log(data.response);
    console.log(data.is_admin);
    if (data.response == "User Not Found"){
        alert("User Not Found");
    }
    else if (data.response == "Logged in"){
        //Check for admin
        if(data.is_admin==1){
            alert("Redirecting admin")
        }else{
            alert('You are now signed in');
        }
    }
}
