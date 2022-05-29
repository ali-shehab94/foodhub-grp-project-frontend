//console.log('hello');



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
    console.log(response);
    console.log("received  ");
 if (response.status==200){
     alert('You are now signed in');
     console.log("Success sign in");
     //window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
 }else {
     console.log('response error with status code = ' + response.status);
 }
 }
)});