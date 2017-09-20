# Pig Latin Generator

We used our experience in arrays and loopig in order to make a generator for pig latin. The user inputs words and the business logic loops through certain rules to output something.

### Prerequisites

* Web browser able to see bootstrapping, javascript, and html
* atom.io
* terminal

## Specs

* The program does nothing to non-alphabetical characters since they do not contain consonants or vowels.
** Input - 9
** Output - ‘Please enter a valid character in this field.’
* For words beginning with a vowel, add “way” to the end.
** Input - a
** Output - away
* For words beginning with "y", treat "y" as a consonant.
** Input - Yay
** Output - ayyay
* For words beginning with two consonants, add “ay” to the end and move the two characters along with it.
** Input - String
** Output - ingStray
* If the first consonants include "qu", move the "u" along with the "q".
** Input - Quail
** Output - ailQuay
* Don't forget about words like "squeal" where "qu" doesn't come first!
** Input - Squal
** Output - alSquay


## Running the tests

* Input a phrase in the text box
* Hit the button

## Deployment

Launch on a web browser

## Built With

* atom
* Hansen's brain
* A little of Gyles' brain

## Contributing

Hansen and Gyles

## Versioning

1.0.0.0 Beta

## License

This project is licensed under the MIT License
