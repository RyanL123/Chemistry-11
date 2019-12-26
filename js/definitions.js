// parses definitions.json into definitions variable
let url = "JSON/definitions.json"
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
        writeCards(document.getElementById("definitions-cards-container"), definitions.definitions);
    }
}
xhr.send(null);


//filters cards, prioritizing definitions with the search query in the title
function filter() {
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
            let filter = document.getElementById("filter").value;
            let filteredResultsTitle = [];
            let filteredResultsContent = [];
            for (let i = 0; i < definitions.definitions.length; i++){
                // Add definition to array if there is a match
                if (definitions.definitions[i].Term.toUpperCase().indexOf(filter.toUpperCase()) > -1){
                    filteredResultsTitle.push(definitions.definitions[i]);
                }
                else if (definitions.definitions[i].Definition.toUpperCase().indexOf(filter.toUpperCase()) > -1){
                    filteredResultsContent.push(definitions.definitions[i]);
                }
            }
            // Write cards by concatonating the arrays, with results title being first
            writeCards(document.getElementById("definitions-cards-container"), filteredResultsTitle.concat(filteredResultsContent));
        }
    }
    xhr.send(null);
}

function writeCards(container, cardsArray){
    container.innerHTML = "";
    for (let i = 0; i < cardsArray.length; i++){
        container.innerHTML += "<div class=\"card\"><h2 class=\"subtitle\">" + 
        "<a href=" + cardsArray[i].Link + 
        " target=\"_blank\">" + cardsArray[i].Term + 
        "</a></h2><h3>" + cardsArray[i].Definition + "</h3></div>"
    }
}