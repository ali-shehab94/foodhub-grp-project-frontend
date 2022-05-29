//Declaring a variable to store the response from the backend
let myResponse = '';



//AXIOS
$("#sign-in-btn").click(function(){
    let data = new FormData();
data.append('email', $("#email").val());
data.append('password', $("#password").val());

console.log('Axios here');

axios ({
 method: 'post',
 url: 'http://localhost:80/Food-Hub-Back-end/signIn2.php',
 data: data,
})

.then(function (response) {
    myResponse = response.data;
    console.log("received");
 if (response.data){
    //handleResponse(myResponse);
    alert('You are now signed in');
    console.log("Success sign in");
    //window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
 }else {
    console.log('response error with status code = ' + response.status);
 }
 }
)});


// Parse response to check for admin
function handleResponse(response){
    console.log(response);
    if (response.length>0){
        alert('You are now signed in');
        console.log('testadmin' + response[0].is_admin);
        if (response[0].is_admin){

        }
    }
}