var colors = ['blue', 'green', 'gray', 'pink', 'red', 'yellow', 'white', 'black']
var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
  var random_number = Math.random() * 8;
  var random_number_integer = Math.floor(random_number);
  target = random_number_integer;
  colors = colors.sort();
  var showcolorsAsString = colors.join(', ');
  alert(colors + "\n" + target + "\n" + "Target is color: " + colors[target]);

  while (!finished) {
      guess_input_text = prompt("I am thinking of these colors\n\n" + showcolorsAsString +
                                "\n\nWhat color am I thinking of?");
      guess_input = colors.indexOf(guess_input_text);
      alert(guess_input);
      guesses += 1;
      finished = check_guess();
  }
}

function check_guess() {
       if ((guess_input < 0) || (guess_input > 7)) {
         alert("Sorry, I don't recongize your color.\n\n" +
               "Please try again.");
          return false;
       }
       if (guess_input > target) {
         alert("Sorry, your guess is not correct! \n\n" +
         "Hint: your color is alphabetical higher than mine\n\n" +
         "Please try again.");
           return false;
       }
       if (guess_input < target) {
         alert("Sorry, your guess is not correct! \n\n" +
         "Hint: your color is alphabetical lower than mine \n\n" +
         "Please try again.");
           return false;
       }
       alert("You got it! The number was " + target +
             ".\n\nIt took you " + guesses +
             " guesses to get the number!");
       return true;
}
