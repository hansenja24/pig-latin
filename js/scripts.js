$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var wordsInput = $("#input").val();
    var vowels = ["a", "A", "e", "E", "i", "I", "u", "U", "o", "O"];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var string = wordsInput.split(" ")
    var num = 0;
    var value = true;
    var value2 = true;
    var words = [];
    var newString = [];

    string.forEach(function(str) {
      words.push(str);
    });

    // Numbers
    words.forEach(function(word) {

      numbers.forEach(function(number) {
        if (word.charAt(0) == number && value === true) {
          alert('Please enter valid characters.')
          value = false;
        }
      });
    });


      words.forEach(function(word) {
        value = true;
        value2 = true;
        debugger;
        // qu

        if(word.charAt(0) === "q" && word.charAt(1) === "u" && value === true){
          word = word + word.charAt(0) + word.charAt(1);
          word += "ay";
          word = word.substring(2);
          newString.push(word);
          value = false;
        }



    // Vowel
    vowels.forEach(function(vowel) {
      if (word.charAt(0) === vowel && value === true) {
        word += "way";
        newString.push(word);
        value = false;
      }
    });

    // One Consonant
    // vowels.forEach(function(vowel) {
    //   if (word.charAt(0) !== vowel && word.charAt(1) === vowel && value === true) {
    //     word += word.charAt(0);
    //     word += "ay";
    //     word = word.substr(1);
    //     newString.push(word);
    //     value = false;
    //   }
    // });

    // Multiple Consonants + one constonant

    vowels.forEach(function(vowel) {
      if (word.charAt(0) !== vowel && value === true) {
        var num;
        for(i =0;i <= word.length; i++){
          vowels.forEach(function(vowel){
            if(word.charAt(i) === vowel && value2 === true){
              num = i;
              value2 = false;
            }
          })
        }


        for(i=0;i < num;i++){
          word = word + word.charAt(i);
        }
        word += "ay";
        word = word.substr(num);
        newString.push(word);
        value = false;
      }
    });


  });
  var showString = newString.join(" ")
  $("h4").show().text(showString);
  });
});
