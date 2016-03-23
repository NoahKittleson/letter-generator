$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var streetInput = $("input#street").val().toUpperCase();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipCodeInput = $("input#zipCode").val();
    var nameInput = $("input#name").val();
    var recipientInput = $("input#recipient").val();


    $(".street").text(streetInput);
    $(".city").text(cityInput.toLowerCase());
    $(".state").text(stateInput);
    $(".zipCode").text(zipCodeInput);
    $(".name").text(nameInput);
    $(".recipient").text(recipientInput);

    $("#letter").show();

    event.preventDefault();
  });
});
