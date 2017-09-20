$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var wordsInput = $("#input").val();
    var vowels = ["a", "A", "e", "E", "i", "I", "u", "U", "o", "O"];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var num = 0;

    var value = true;
    var value2 = true;


// Numbers
  numbers.forEach(function(number) {
    if (wordsInput.charAt(0) == number && value === true) {
      alert('Please enter valid characters.')
      value = false;
    }
  });

// qu
  if(wordsInput.charAt(0) === "q" && wordsInput.charAt(1) ==="u" && value === true){
    wordsInput = wordsInput + wordsInput.charAt(0) + wordsInput.charAt(1);
    wordsInput += "ay";
    wordsInput = wordsInput.substring(2);
    $("h4").show().text(wordsInput);
    value = false;
  }

  // Vowel
  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) === vowel && value === true) {
      wordsInput += "way";
      $("h4").show().text(wordsInput);
      value = false;
    }
  });

// One Consonant
  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel && value === true) {
      wordsInput += wordsInput.charAt(0);
      wordsInput += "ay";
      wordsInput = wordsInput.substr(1);
      $("h4").show().text(wordsInput);
      value = false;
    }
  });

// One Consonant
  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel && value === true) {
      wordsInput += wordsInput.charAt(0);
      wordsInput += "ay";
      wordsInput = wordsInput.substr(1);
      $("h4").show().text(wordsInput);
      value = false;
    }
  });

  // Multiple Consonants
  var num;
  for(i =0;i <= wordsInput.length; i++){
    vowels.forEach(function(vowel){
      if(wordsInput.charAt(i) === vowel && value2 === true){
        num = i;
        value2 = false;
      }
    })
  }

  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) !== vowel && value === true) {

    for(i=0;i < num;i++){
      wordsInput = wordsInput + wordsInput.charAt(i);
    }
    // wordsInput = wordsInput + wordsInput.charAt(0) + wordsInput.charAt(1);
    wordsInput += "ay";
    wordsInput = wordsInput.substr(num);
    $("h4").show().text(wordsInput);
    value = false;
    }
  });
});
});
