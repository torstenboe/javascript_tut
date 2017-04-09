var colors = ['Blue', 'Green', 'Gray', 'Pink', 'Red', 'Yellow', 'White', 'Black']
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
  alert(colors + "\n" + target + "\n" + "Target is color: " + colors[target]);

  while (!finished) {
      guess_input_text = prompt("I am thinking of these colors\n\n" + colors +
                                "\n\n What is your number?");
      //guess_input = parseInt(guess_input_text);
      guess_input = colors.indexOf(guess_input_text);
      alert(guess_input);
      guesses += 1;
      finished = check_guess();
  }
}

function check_guess() {
       if (isNaN(guess_input)) {
           alert("You have not entered a number.\n\n" +
                 "Please enter a number in the range 1 to 8.");
           return false;
       }
       if ((guess_input < 1) || (guess_input > 8)) {
           alert("Please enter an integer number in the range 1 to 8.");
           return false;
       }
       if (guess_input > target) {
           alert("Your number is too large!");
           return false;
       }
       if (guess_input < target) {
           alert("Your number is too small!");
           return false;
       }
       alert("You got it! The number was " + target +
             ".\n\nIt took you " + guesses +
             " guesses to get the number!");
       return true;
}
