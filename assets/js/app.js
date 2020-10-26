$(document).ready(function() {
  $("#formOne").submit(function(event) {
    
    let potato = [];
    let dino = [];

    potato [0] = $("input#person1").val();
    potato [1] = $("input#person2").val();
    potato [2]= $("input#animal").val();
    potato [3] = $("input#exclamation").val();
    potato [4] = $("input#verb").val();
    potato [5] = $("input#noun").val();

    dino [0] = "#wordone";
    dino [1] = "#wordtwo";
    dino [2] = "#wordthree";
    dino [3] = "#wordfour";
    dino [4] = "#wordfive";
    dino [5] = "#wordsix";
 

    potato.forEach(function(element1) {
      dino.forEach(function(element2) {
        $(element2).text(element1);
      });
    });

    // $("#wordone").text();
    // $("#wordtwo").text();
    // $("#wordthree").text();
    // $("#wordfour").text();
    // $("#wordfive").text();
    // $("#wordsix").text();

    $("#story").show();
    event.preventDefault();
  });
});