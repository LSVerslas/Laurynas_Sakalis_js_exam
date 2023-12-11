'use strict';
console.log('script.js file was loaded');

fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        var output = '';
        for (var i = 0; i < data.length; i++) {
            output += '<div class="card">' +
                      '<h4><b>' + data[i].brand + '</b></h4>' +
                      '<p>Pagaminti modeliai:</p>' +
                      '<ul>';
            for (var j = 0; j < data[i].models.length; j++) {
                output += '<li>' + data[i].models[j] + '</li>';
            }
            output += '</ul></div>';
        }
        document.getElementById('output').innerHTML = output;
    });