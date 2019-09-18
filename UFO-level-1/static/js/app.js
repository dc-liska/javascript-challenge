// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");


    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    var sighting_date = filteredData.map(sighting => sighting.datetime)
    var sighting_city = filteredData.map(sighting => sighting.city)
    var sighting_state = filteredData.map(sighting => sighting.state)
    var sighting_country = filteredData.map(sighting => sighting.country)
    var sighting_shape = filteredData.map(sighting => sighting.shape)
    var sighting_comment = filteredData.map(sighting => sighting.comment)



    var result_table = d3.select(".table-striped");


    // remove any children from the table
    result_table.html("");
  
    // append data to the table
    result_table.append("td").text(`${sighting_date}`);
    result_table.append("td").text(`${sighting_city}`);
    result_table.append("td").text(`${sighting_state}`);
    result_table.append("td").text(`${sighting_country}`);
    result_table.append("td").text(`${sighting_shape}`);
    result_table.append("td").text(`${sighting_comment}`);


});