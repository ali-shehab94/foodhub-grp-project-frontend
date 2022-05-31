//Declaring a variable to store the response from the backend
let user_id = "";
let user_first_name = "";



//AXIOS
$("#sign-in-btn").click(function(){
    let data = new FormData();
    data.append('email', $("#email").val());
    data.append('password', $("#password").val());

    axios ({
    method: 'post',
    url: 'http://localhost/Food-Hub-Back-end/signIn.php',
    data: data,
    })

    .then(function (response) {
        // If we got a response at all
        if (response.data.success==true){
            handleResponse(response.data);
        }else {
            console.log('response error with status code = ' + response);
        }
    })
});

// Parse response to check "is found", "not found", "admin"
function handleResponse(data){
    if (data.response == "User Not Found"){
        alert("User Not Found");
    }
    else if (data.response == "Logged in"){
        //Check for admin
        if(data.is_admin==1){
            alert("Redirecting admin")
            window.location.replace("http://localhost/foodhub-grp-project-frontend/pages/admin.html");
        }else{
            user_id = data.user_id;
            user_first_name = data.first_name;
            console.log(user_id, user_first_name);
            // Save to local Storage
            localStorage.clear();
            localStorage.setItem("user_id", user_id);
            localStorage.setItem("user_first_name", user_first_name);
            // Alert and redirect
            alert(`Welcome ${user_first_name} You are now signed in`);
            window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
        }
    }
}
