let userId = localStorage.getItem("user_id")
console.log(userId)
var radioValue = $("input[type='radio']:checked").val();
console.log(radioValue)
$("#update-info-btn").click(function(){
    console.log("hey")
    console.log($("#gender".val()))
    let data = new FormData();
    data.append('user_id', userId);
    data.append('first_name', $("#f_name").val());
    data.append('last_name', $("#rl_name").val());
    data.append('username', $("#rusername").val());
    data.append('email', $("#email").val());
    data.append('password', $("#l_name").val());
    data.append('dob', $("#dob").val());
    data.append('phone_number', $("#phone_number").val());
    data.append('gender', $("#radioValue").val());
    data.append('address', $("address").val());

    axios({
        method: 'post',
        url: 'http://localhost/Food-Hub-Back-end/EditUserProfile.php',
        data: data,
        })

    .then(function (response) {
        if (response){
        console.log("Success Hamze")
        alert('You have been succefully update ypur profile!')
        }else {
        console.log('response error with status code = ' + response.status)
        }
    })
})