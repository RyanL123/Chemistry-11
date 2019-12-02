var polyatomicIons = {
    "ions": [
        {
          formula: "CN",
          name: "Cyanide",
          charge: -1
        },
        {
          formula: "CH<sub>3</sub>COO",
          name: "Acetate",
          charge: -1
        },
        {
          formula: "ClO<sub>2</sub>",
          name: "Chlorite",
          charge: -1
        },
        {
          formula: "ClP<sub>3</sub>",
          name: "Chlorate",
          charge: -1
        },
        {
          formula: "HCO<sub>3</sub>",
          name: "Hydrogen Carbonate",
          charge: -1
        },
        {
          formula: "HSO<sub>3</sub>",
          name: "Hydrogen Sulfite",
          charge: -1
        },
        {
          formula: "HSO<sub>4</sub>",
          name: "Hydrogen Sulfate",
          charge: -1
        },
        {
          formula: "H<sub>2</sub>PO<sub>3</sub>",
          name: "Dihydrogen Phosphite",
          charge: -1
        },
        {
          formula: "H<sub>2</sub>PO<sub4</sub>",
          name: "Dihydrogen Phosphate",
          charge: -1
        },
        {
          formula: "MnO<sub>4</sub>",
          name: "Permanganate",
          charge: -1
        },
        {
          formula: "NO<sub>2</sub>",
          name: "Nitrite",
          charge: -1
        },
        {
          formula: "NO<sub>3</sub>",
          name: "Nitrate",
          charge: -1
        },
        {
          formula: "OCN",
          name: "Cynate",
          charge: -1
        },
        {
          formula: "HS",
          name: "Hydrogen Sulfide",
          charge: -1
        },
        {
          formula: "OH",
          name: "Hydroxide",
          charge: -1
        },
        {
          formula: "SCN",
          name: "Thiocynate",
          charge: -1
        },
        {
          formula: "CO<sub>3</sub>",
          name: "Carbonate",
          charge: -2
        },
        {
          formula: "C<sub>2</sub>O<sub>4</sub>",
          name: "Oxalate",
          charge: -2
        },
        {
          formula: "CrO<sub>4</sub>",
          name: "Chromate",
          charge: -2
        },
        {
          formula: "Cr<sub>2</sub>O<sub>7</sub>",
          name: "Dichromate",
          charge: -2
        },
        {
          formula: "HPO<sub>3</sub>",
          name: "Hydrogen Phosphite",
          charge: -2
        },
        {
          formula: "HPO<sub>4</sub>",
          name: "Hydrogen Phosphate",
          charge: -2
        },
        {
          formula: "O<sub>2</sub>",
          name: "Peroxide",
          charge: -2
        },
        {
          formula: "SiO<sub>3</sub>",
          name: "Silicate",
          charge: -2
        },
        {
            formula: "SO<sub>3</sub>",
            name: "Sulfite",
            charge: -2
        },
        {
          formula: "SO<sub>4</sub>",
          name: "Sulfate",
          charge: -2
        },
        {
          formula: "S<sub>2</sub>O<sub>3</sub>",
          name: "Thiosulfate",
          charge: -2
        },
        {
          formula: "AsO<sub>3</sub>",
          name: "Arsenite",
          charge: -3
        },
        {
          formula: "AsO<sub>4</sub>",
          name: "Arsenate",
          charge: -3
        },
        {
          formula: "PO<sub>3</sub>",
          name: "Phosphite",
          charge: -3
        },
        {
          formula: "PO<sub>4</sub>",
          name: "Phosphate",
          charge: -3
        },
    ]
}
polyatomicIons.ions.sort(
  function(a,b){
      return a.name.localeCompare(b.name);
  }
);
for (var i = 0; i < polyatomicIons.ions.length; i++){
    document.getElementById("polyatomic-table").innerHTML += "<tr><td align=\"center\">" + polyatomicIons.ions[i].formula + "</td>" +
                                                            "<td align=\"center\">" + polyatomicIons.ions[i].name + "</td>" +
                                                            "<td align=\"center\">" + polyatomicIons.ions[i].charge + "</td></tr>"
}

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
            shouldSwitch= true;
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
        switchcount ++;      
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
