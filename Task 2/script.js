'use strict';
console.log('script.js file was loaded');

var count = 0;
document.getElementById('clickMe').addEventListener('click', function() {
    count++;
    document.getElementById('btn__state').innerHTML = count;
});