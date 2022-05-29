//Declaring a variable to store the response from the backend
let myResponse = '';

//AXIOS
$("#test").click(function(){

axios({
 method: 'get',
 url: 'http://localhost/Food-Hub-Back-end/getRestaurants.php'
})

.then(function (response) {
    console.log(response);
    console.log("received..");
 if (response){
    myResponse = response;
    console.log(myResponse.data.length);
    console.log('HEY');
 }else {
     console.log('response error with status code = ' + response.status);
 }
 }
)});


// var my_para = document.getElementById("para");
        

// my_para.innerHTML = "Click on the button to create the "
//         + "table from the JSON data.<br><br>"
//         + JSON.stringify(list[0]) + "<br>"
//         + JSON.stringify(list[1]) + "<br>"
//         + JSON.stringify(list[2]);  


function displayJson() {
    var list = myResponse.data;
    var cols = [];
        
    for (var i = 0; i < list.length; i++) {
        for (var k in list[i]) {
            if (cols.indexOf(k) === -1) {
                    
                // Push all keys to the array
                cols.push(k);
            }
        }
    }
        
    // Create a table element
    var table = document.createElement("table");
        
    // Create table row tr element of a table
    var tr = table.insertRow(-1);
        
    for (var i = 0; i < cols.length; i++) {
            
        // Create the table header th element
        var theader = document.createElement("th");
        theader.innerHTML = cols[i];
            
        // Append columnName to the table row
        tr.appendChild(theader);
    }
        
    // Adding the data to the table
    for (var i = 0; i < list.length; i++) {
            
        // Create a new row
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);
                
            // Inserting the cell at particular place
            cell.innerHTML = list[i][cols[j]];
        }
    }
        
    // Add the newly created table containing json data
    var el = document.getElementById("table");
    el.innerHTML = "";
    el.appendChild(table);
}   



