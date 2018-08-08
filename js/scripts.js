$(document).ready(function() {
  $("#inputs").submit(function(event) {
    console.log("2");
    var person1Input = $("input#name").val();
    var person2Input = $("input#address").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#earring").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    $(".name").text(person1Input);
    $(".address").text(person2Input);
    $(".animal").text(animalInput);
    $(".earring").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
    $("#reciept").show();

    event.preventDefault();
  });
});
