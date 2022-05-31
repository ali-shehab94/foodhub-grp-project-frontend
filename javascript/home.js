
let user_id = localStorage.getItem("user_id");
let user_fname = localStorage.getItem("user_first_name");
console.log(user_id, user_fname);

// Lets check if the user is not registered, will redirecte them to sign in page
if (!user_id){
    //not registered
    window.location.href = "../pages/sign-in.html";
    // window.location.replace("http://localhost/foodhub-grp-project-frontend/pages/sign-in.html");
}else{
    //dislay user name on page
    let element = document.getElementById("user-name");
    element.innerHTML = `Hi, ${user_fname} &#128075`;
}