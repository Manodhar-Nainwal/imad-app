Console.log('Loaded!');

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

//submit a name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
        submit.onclick = function() {
            
            // Create a request oblect
            var reques = new XMLHttpRequest();
            names = JSON.parse(names);
            var list = '';
            for (var i=0; i<names.length; i++) {
                list += '<li>' +names(i)+ '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
            }
        }
        // Not done yet
        };
    // Make the request    
     request.open('GET" http://manodharn.imad.hasura-app.io/submit-name?name=',+name, true);  
     request.send(null); 
};