// Upload image
let property = document.querySelector("#image_input").files[0];
const image_input = document.querySelector("#image_input");
var uploaded_image = "";
image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})  



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
});


 
    
