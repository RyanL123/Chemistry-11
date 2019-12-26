// parses polyatomic.json into polyatomicIons variable
let url = "./JSON/polyatomic.json"
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var polyatomicIons = JSON.parse(xhr.responseText);

    // For some reason polyatomics cannot be modified on the global scope,
    // so everything has to be done within the same scope as JSON.parse request
    // Sort array elements lexicographically by their name
    polyatomicIons.ions.sort(
      function (a, b) {
        return a.name.localeCompare(b.name);
      }
    );

    //Write polyatomic ions into table
    for (var i = 0; i < polyatomicIons.ions.length; i++) {
      document.getElementById("polyatomic-table").innerHTML += "<tr><td align=\"center\">" + polyatomicIons.ions[i].formula + "</td>" +
        "<td align=\"center\">" + polyatomicIons.ions[i].name + "</td>" +
        "<td align=\"center\">" + polyatomicIons.ions[i].charge + "</td></tr>"
    }
  }
}
xhr.send(null);


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("polyatomic-table");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";

  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;

    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {

      //start by saying there should be no switching:
      shouldSwitch = false;

      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
