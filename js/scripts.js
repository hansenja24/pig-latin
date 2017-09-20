$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var wordsInput = $("#input").val();
    var vowels = ["a", "A", "e", "E", "i", "I", "u", "U", "o", "O"];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    value = true

    // debugger;

  numbers.forEach(function(number) {
    if (wordsInput.charAt(0) == number && value === true) {
      alert('Please enter valid characters.')
      value = false;
    }
  });

  if(wordsInput.charAt(0) === "q" && wordsInput.charAt(1) ==="u" && value === true){
    wordsInput = wordsInput + wordsInput.charAt(0) + wordsInput.charAt(1);
    wordsInput += "ay";
    wordsInput = wordsInput.substring(2);
    alert(wordsInput);
    value = false;

}
  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) === vowel && value === true) {
      wordsInput += "way";
      alert(wordsInput)
      value = false;
    }
  });

  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel && value === true) {
      wordsInput += wordsInput.charAt(0);
      wordsInput += "ay";
      wordsInput = wordsInput.substr(1);
      alert(wordsInput);
      value = false;
    }
  });

  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel && value === true) {
      wordsInput += wordsInput.charAt(0);
      wordsInput += "ay";
      wordsInput = wordsInput.substr(1);
      alert(wordsInput);
      value = false;
    }
  });

  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) !== vowel && value === true) {
    wordsInput = wordsInput + wordsInput.charAt(0) + wordsInput.charAt(1);
    wordsInput += "ay";
    wordsInput = wordsInput.substr(2);
    alert(wordsInput);
    value = false;
    }
  });

});
});
