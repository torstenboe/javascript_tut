var colors = ['Blue', 'Green', 'Gray', 'Pink', 'Red', 'Yellow', 'White', 'Black']


function do_game() {
  var random_number = Math.random() * 8;
  var random_number_integer = Math.floor(random_number);
  target = random_number_integer;
  alert(colors, target, "Target is color: ", colors[target]);
}
