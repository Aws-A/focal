const rollDice = function(num){
  var dices = " ";
  for (var i = 0; i < num - 1; i++){
    dices = dices + Math.ceil(Math.random() * 6) + " , ";
  }
  dices = dices + Math.round(Math.random() * 6)
  return dices;
};

console.log(rollDice(3));