$("#submit-review").click(function(){
    let data = new FormData();
data.append('content', $("#review").val());
data.append('rate', $("#rating").val());

axios({
 method: 'post',
 url: 'http://localhost/Food-Hub-Back-end/signUp.php',
 data: data,
})

.then(function (response) {
    console.log(response);
    //console.log("received  ");
 if (response.data['success']==true){
     console.log("Success Hamze")
     alert('You have been succefully registered!')
     window.location.replace("http://localhost/foodhub-grp-project-frontend/index.html");
 }else {
     console.log('response error with status code = ' + response.status)
 }
 }
)});
