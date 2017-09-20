$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var wordsInput = $("#input").val();
    var vowels = ["a", "A", "e", "E", "i", "I", "u", "U", "o", "O"];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    value = true

    // numbers.forEach(function(number) {
    //     debugger;
    //     if (wordsInput.indexOf(number) > 0){
    //       vowels.forEach(function(vowel) {
    //         if (wordsInput.indexOf(vowel) = 0) {
    //         alert(wordsInput+"way")
    //       };
    //       });
    //
    //     }
    // });
    //
  //   numbers.forEach(function(number) {
  //     // debugger;
  //     if (wordsInput.charAt(0) === number && value === true) {
  //       alert("Please enter a valid word.");
  //       value = false;
  //     } else {
  //     };
  //   });
  // });

  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) === vowel) {
      wordsInput += "way";
      alert(wordsInput)
    } else if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel) {
      wordsInput += wordsInput.charAt(0);
      wordsInput += "ay";
      wordsInput = wordsInput.substr(1);
      alert(wordsInput);
    }
  });

  vowels.forEach(function(vowel) {
    if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel && value === true) {
      wordsInput += wordsInput.charAt(0);
      wordsInput += "ay";
      wordsInput = wordsInput.substr(1);
      alert(wordsInput);
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

  // vowels.forEach(function(vowel) {
  //
  //   if (wordsInput === vowel && value === true) {
  //     // && wordsInput.charAt(1) === vowel) {
  //     wordsInput += "way";
  //     alert(wordsInput);
  //     value = false
  //   } else if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) === vowel && value === true) {
  //     wordsInput += wordsInput.charAt(0);
  //     wordsInput += "ay";
  //     wordsInput = wordsInput.substr(1);
  //     alert(wordsInput);
  //     value = false;
  //   } else if (wordsInput.charAt(0) !== vowel && wordsInput.charAt(1) !== vowel && value === true) {
  //     wordsInput = wordsInput + wordsInput.charAt(0) + wordsInput.charAt(1);
  //     wordsInput += "ay";
  //     wordsInput = wordsInput.substr(2);
  //     alert(wordsInput);
  //     value = false;
  //   }
  // });
