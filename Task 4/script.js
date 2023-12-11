'use strict';
console.log('script.js file was loaded');

fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        var output = '';
        for (var i = 0; i < data.length; i++) {
            output += '<div class="card">' + 
                      '<h2><b>' + data[i].brand + '</b></h2>' +
                      '<h3>Pagaminti modeliai:</h3>' +
                      '<ul class="noList">';
            for (var j = 0; j < data[i].models.length; j++) {
                output += '<li>' + data[i].models[j] + '</li>';
            }
            output += '</ul class="card"></div>';
        }
        document.getElementById('output').innerHTML = output;
    });