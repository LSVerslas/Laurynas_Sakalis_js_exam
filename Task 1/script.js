'use strict';
console.log('funcExpArr.js file was loaded');

document.getElementById('weightForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var weight = document.getElementById('weight').value;
  var lb = weight * 2.2046;
  var g = weight / 0.0010000;
  var oz = weight * 35.274;
  document.getElementById('output').innerHTML = 'Svarai: ' + lb.toFixed(2) + ' lb<br>' +
                                                 'Gramai: ' + g.toFixed(2) + ' g<br>' +
                                                 'Uncijos: ' + oz.toFixed(2) + ' oz';
});