//Declaring a variable to store the response from the backend
let myResponse = '';

axios({
 method: 'post',
 url: 'http://localhost/Food-Hub-Back-end/ali-restaurants.php',
})

.then(function (response) {
    if (response){
    myResponse = response;
    console.log(myResponse.data);
    }else {
        console.log('response error with status code = ' + response.status);
    }
})

console.log(myResponse.data.length)
var cols = [];

for (var i = 0; i < myResponse.data.length; i++) {
    for (var k in myResponse.data[i]) {
        if (cols.indexOf(k) === -1) {
            // Push all keys to the array
            cols.push(k);
        }
    }
}

displayJson()
console.log("cols" + cols)