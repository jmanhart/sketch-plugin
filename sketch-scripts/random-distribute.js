{/*
Snagged this from Kumo!
https://github.com/kumo
*/}

var doc = context.document;
var currentArtboard = context.selection[0].parentArtboard;
var selection = context.selection;

/* log(currentArtboard); */

var layer = selection[0];
var layerWidth = [[layer frame] width];
var layerHeight = [[layer frame] height];
var frame = [layer frame];
var parent = [layer parentGroup];

/* log(layer);
log(layer.style);
log(layer.children);
log(layer.layers);

log(frame);
log(parent); */

var artboardWidth = [[parent frame] width];
var artboardHeight = [[parent frame] height];

/* log(artboardWidth);
log(artboardHeight); */

var count = [doc askForUserInput:"How many copies do you want?" initialValue:"50"]

for (var j=0; j<[selection count]; j++) {
  var source = selection[j];

  var frame = [source frame];
  [frame setX: Math.random() * (artboardWidth + layerWidth) - layerWidth / 2];
  [frame setY: Math.random() * (artboardHeight + layerHeight) - layerHeight / 2];

  [source setRotation:Math.random() * 360];
}

for (var i=0; i<count; i++) {
  for (var j=0; j<[selection count]; j++) {
    var source = selection[j];
    var clone = [source duplicate];

    var frame2 = [clone frame];
    [frame2 setX: Math.random() * (artboardWidth + layerWidth) - layerWidth / 2];
    [frame2 setY: Math.random() * (artboardHeight + layerHeight) - layerHeight / 2];

    [clone setRotation:Math.random() * 360];
  }
}
