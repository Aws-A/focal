const raisinAlarm = function(cookie) {
  var count = 0;
  for (var i = 0; i < cookie.length; i++){
    if (cookie[i] === "🍇") {
      count = count + 1;
    }
  }
  if (count > 0) {
    return 'Raisin alert!';
  } else {
    return 'All good!';
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));