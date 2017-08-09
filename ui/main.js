+console.log('Loaded!');
//counter code
var button = document.getElementById('counter');

button.onclick = function() {


    // Create a request oblect
    var reques = new XMLHttpRequest();
    
    // Capture the reponse and store it in a variable
    request.onreadystatchange = function() {
        if (request.readystat === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status === 200) {
                var counter = request.responseText;
            }
        }
        // Not done yet
        };
    // Make the request    
     request.open('GET" http://manodharn.imad.hasura-app.io/counter', true);  
     request.send(null);   
};        