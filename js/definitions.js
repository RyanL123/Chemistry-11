// parses definitions.json into definitions variable
let url = "../JSON/definitions.json"
var xhr = new XMLHttpRequest();
xhr.open("GET",url, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var definitions = JSON.parse(xhr.responseText);

        // For some reason definitons cannot be modified on the global scope,
        // so everything has to be done within the same scope as JSON.parse request
        // Sort array elements lexicographically by their term
        definitions.definitions.sort(
            function(a,b){
                return a.Term.localeCompare(b.Term);
            }
        );  
        
        //Write elements in order, formatting them as hyperlinks
        for (var i = 0; i < definitions.definitions.length; i++){
            document.getElementById("definitions-div").innerHTML += "<div class=\"definitions\"><h2>" + "<a href=" + definitions.definitions[i].Link + " target=\"_blank\">" + definitions.definitions[i].Term + "</a></h2><p>" + definitions.definitions[i].Definition + "</p></div>"
        }
    }
}
xhr.send(null);


//Filters definitions based on whats in the search bar
function filter(){
    //Get objects
    var input = document.getElementById("filter");
    var filter = input.value.toUpperCase();
    var container = document.getElementById("definitions-div");
    var definitions = container.getElementsByClassName("definitions");

    //Initially hide all elements
    for (var i = 0; i < definitions.length; i++){
        var title = definitions[i].querySelector(".definitions h2");
        var content = definitions[i].querySelector(".definitions p")

        definitions[i].style.display = "none";
    }

    //Iterate through definitions
    for (var i = 0; i < definitions.length; i++){
        var title = definitions[i].querySelector(".definitions h2");
        var content = definitions[i].querySelector(".definitions p")

        //Only show if content in filter matches content in definitions
        if (title.innerText.toUpperCase().indexOf(filter) > -1 || content.innerText.toUpperCase().indexOf(filter) > -1){
            definitions[i].style.display = "";
        }
    }
}