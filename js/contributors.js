async function getContributors(){
    let url = "https://api.github.com/repos/RyanL123/Chemistry-11/contributors"
    // let url = "https://api.github.com/repos/michalsnik/aos/contributors";
    let response = await fetch(url);
    let contributors = await response.json();
    let contributorsDiv = document.getElementById("contributors");
    // console.log(result);
    for (let i = 0; i < contributors.length; i++){
        contributorsDiv.innerHTML += "<div class=\"contributors-sub-div\">"
        + "<div class=\"contributors-img-div\">"
        + "<img src=\"" + contributors[i].avatar_url + "\">" 
        + "</div>"
        + "<a href=\"" + contributors[i].html_url + "\"><h2 class=\"contributor-name\">"
        + contributors[i].login
        + "</h2></a>"
        + "</div>";
    }
}

getContributors();