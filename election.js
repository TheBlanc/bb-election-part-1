document.addEventListener("DOMContentLoaded", function() {

  var resultButton = document.querySelector('#checkResult');
  var result = document.querySelector('#result');


  resultButton.addEventListener('click', function() {
    $.ajax({
      url: 'https://bb-election-api.herokuapp.com',
      method: 'GET',
      dataType: 'json'
    }).done( function(responseData) {
      result.innerHTML = "";
      responseData.candidates.forEach( function(cand) {
        var name = document.createElement('h2');
        var votes = document.createElement('p');
        name.innerHTML = cand.name;
        votes.innerHTML = "Votes: " + cand.votes;
        result.appendChild(name);
        result.appendChild(votes);
      });
    }).fail( function(responseData) {
      console.log("ERROR");
      result.innerHTML = "";
      var error = document.createElement('h2');
      error.innerHTML = "Whoops, something went wrong...";
      result.appendChild(error);
    });
  });


});
