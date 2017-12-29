{/*
Snagged this from Kumo!
https://github.com/kumo
*/}

for (var i=0; i<selection.count(); i++) {
	var layer = selection[i];

	[layer setRotation:Math.random() * 360];
}
