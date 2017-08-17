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
     request.open('GET" http://manodharn.imad.hasura-app.io/counter', true);  
     request.send(null);   
};  

