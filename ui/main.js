//counter code
var button = document.getElementById('counter');

button.onclick = function () {

    // Create a request object
    var reques = new XMLHttpRequest();
    
    // Capture the reponse and store it in a variable
    request.onreadystatchange = function() {
        if (request.readystat === XMLHttpRequest.DONE) {
            // take some action
           if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not done yet
        };
        
    // Make the request    
     request.open('GET','http://manodharn.imad.hasura-app.io/counter', true);  
     request.send(null);   
};

//submit name
     var submit = document.getElementById('submit_btn');
        submit.onclick = function() {

// Create a request object
        var request = new XMLHttpRequest();
            
// capture the response and store it in a variable
    request.onreadystatchange = function () {
        if (request.readystat === XMLHttpRequest.DONE) {
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
     request.open('GET', 'http://manodharn.imad.hasura-app.io/submit-name?name=' + name, true);  
     request.send(null); 
     
};