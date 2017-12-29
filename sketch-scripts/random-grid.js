{/*
Snagged this from Kumo!
https://github.com/kumo
*/}

var decay = [doc askForUserInput:"How much randomisation do you want?" initialValue:"10"]

function randomSign() {
  if (Math.random() > 0.5) {
    return 1;
  } else {
    return -1;
  }
}

for (var j=0; j<[selection count]; j++) {
  var source = selection[j];

  var frame = [source frame];

  var x = [frame x] + [frame width] / 100 * decay * Math.random() * randomSign();
  [frame setX: x];

  var y = [frame y] + [frame height] / 100 * decay * Math.random() * randomSign();
  [frame setY: y];

  [source setRotation:Math.random() * 360 / 100 * decay * randomSign()];
}
