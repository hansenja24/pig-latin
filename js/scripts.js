$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var wordsInput = $("#input").val();
    var vowels = ["a", "A", "e", "E", "i", "I", "u", "U", "o", "O"];

    vowels.forEach(function(vowel) {
      if (wordsInput.charAt(0) === vowel) {
        wordsInput += "way";
        alert(wordsInput)
      } else if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel) {
        wordsInput += wordsInput.charAt(0);
        wordsInput += "ay";
        wordsInput = wordsInput.substr(1);
        alert(wordsInput);
      } else {
        show("#result");
      }
    });

    debugger;

    // vowels.forEach(function(vowel) {
    //   for (var i = 0; wordsInput.charAt(i) !== vowel; i++ ) {;
    //     if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) !== vowel) {
    //       var output = "";
    //       output += wordsInput
    //       output = output + output.charAt(0) + output.charAt(1);
    //       output += "ay";
    //       output = output.substr(2);
    //       alert(output);
    //     }
    //   }
    // });

    event.preventDefault();
  });
});
