// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");


    var filteredData = tableData.filter(sighting => tableData.datetime === inputValue);

    var result_table = d3.select(".table-striped");

    // remove any children from the list to
    result_table.html("");
  
    // append stats to the list
    list.append("td").text(`Mean: ${mean}`);
    list.append("td").text(`Median: ${median}`);
    list.append("td").text(`Mode: ${mode}`);
    list.append("td").text(`Variance: ${variance}`);
    list.append("td").text(`Standard Deviation: ${standardDeviation}`);


});