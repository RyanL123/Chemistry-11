var definitions = {
    "definitions": [
        {
            Term: "Atomic Radius",
            Definition: "Distance from the nucleus to the outer most electron",
            Link: "https://simple.wikipedia.org/wiki/Atomic_radius"
        },
        {
            Term: "Electronegativity",
            Definition: "Tendency of an atom to attract a shared pair of electrons towards itself",
            Link: "https://simple.wikipedia.org/wiki/Electronegativity"
        },
        {
            Term: "Ionization Energy",
            Definition: "Amount of energy it takes to remove an electron from an atom",
            Link: "https://simple.wikipedia.org/wiki/Ionization_energy"
        },
        {
            Term: "Electron Affinity",
            Definition: "Amount of energy released would give to gain an electron",
            Link: "https://en.wikipedia.org/wiki/Electron_affinity"
        },
        {
            Term: "Ionic Bond (Ionic Compound)",
            Definition: "Formed between metal & non-metal (or polyatomic ion)",
            Link: "https://simple.wikipedia.org/wiki/Ionic_bond"
        },
        {
            Term: "Covalent Bond (Molecular Compound)",
            Definition: "Formed between 2 non-metals. Electrons are shared between the atoms",
            Link: "https://simple.wikipedia.org/wiki/Covalent_bond"
        },
        {
            Term: "Polar Bond (0.4 < |Difference of electronegativity| < 1.7)",
            Definition: "Electrons are not shared equally between the atoms; some electrons are closer to one atom than the other",
            Link: "https://simple.wikipedia.org/wiki/Polar_bond"
        },
        {
            Term: "Non-Polar Bond (|Difference of electronegativity| <= 0.4)",
            Definition: "Electrons are shared equally between both atoms",
            Link: "https://simple.wikipedia.org/wiki/Polar_bond"
        },
        {
            Term: "Metallic Bond",
            Definition: "Formed between metal atoms. Electrons do not belong to any particular atom but are rather shared between all atoms in a “sea” like structure. Because of this, the ionization energy is very low",
            Link: "https://simple.wikipedia.org/wiki/Metallic_bond"
        },
        {
            Term: "Ionic Compound",
            Definition: "Formed between metal & non-metal (or polyatomic ion)",
            Link: "https://simple.wikipedia.org/wiki/Ionic_compound"
        }
    ]
}
// Sort array elements lexicographically by their term
definitions.definitions.sort(
    function(a,b){
        return a.Term.localeCompare(b.Term);
    }
);

//Write elements in order, formatting them as hyperlinks
var output = document.getElementById('definitions');
for (var i = 0; i < definitions.definitions.length; i++){
    document.getElementById("definitions").innerHTML += "<h2>" + "<a href=" + definitions.definitions[i].Link + ">" + definitions.definitions[i].Term + "</a></h2>"
    document.getElementById("definitions").innerHTML += "<p>" + definitions.definitions[i].Definition + "</p>"
}