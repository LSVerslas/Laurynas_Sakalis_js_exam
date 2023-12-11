'use strict';
console.log('script.js file was loaded');



document.getElementById('showUsers').addEventListener('click', function() {
  fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
          var output = '';
          for (var i = 0; i < data.length; i++) {
              output += '<div class="card">' +
                        '<img src="' + data[i].avatar_url + '" alt="Avatar">' +
                        '<div class="container">' +
                        '<h4><b>' + data[i].login + '</b></h4>' +
                        '</div></div>';
          }
          document.getElementById('output').innerHTML = output;
      });
      
});

function hideButton() {
    var button = document.getElementById('showUsers');
    button.style.display = 'none';
  }