$(document).ready(function() {

    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['the Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['the Sun', 27.9]
    ];
    //displaying the3 array of planets in the drop down select element by adding an option node into the HTML
    $.each(planets.reverse(), function(index, value) {
        $("#planetSelect").append(`<option value = ${ value[1] } > ${ value[0] } </option>`);
    });

    var sortedPlanetsArray = planets.sort(function(a, b) {
        return a[1] - b[1]
    });

    $.each(sortedPlanetsArray, function(index, value) {
        $("#tableBody").append(`<tr> <td> ${ value[1] } </td> <td> ${ value[0] } </td></tr>`);
    });


    $("#calculateButton").click(function() {
        var selectedPlanet = planetSelect.options[planetSelect.selectedIndex].text;
        console.log(selectedPlanet);
        var weightInput = $("#yourWeight").val();
        var selectedWeight = planetSelect.options[planetSelect.selectedIndex].value;
        console.log(selectedWeight);
        var planetaryWeight = selectedWeight * weightInput;
        console.log(planetaryWeight);
        var w = Math.round(planetaryWeight);
        $("#outputContent").append("On " + selectedPlanet + ", you would weigh " + w + " pounds.");
    });

});
