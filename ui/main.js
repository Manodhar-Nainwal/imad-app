
//submit username, password to login
     var submit = document.getElementById('submit_btn');
        submit.onClick = function() {

// Create a request object
        var request = new XMLHttpRequest();
            
// capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
            // take some action
            if (request.status === 200) {
                // capture a lsit of names and rander it
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i<names.length; i++) {
                    list += '<li>' + names(i) + '</li>';
                }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
            }
        }
        // Not done yet
    };
        
    // Make the request 
     var nameInput = document.getElementById('name');
     var name = nameInput.value;
     request.open('POST', 'http://manodharn.imad.hasura-app.io/submit-name?name=' + name, true);  
     request.send(JSON.stringyfy({username: username, password: password})); 
     
};