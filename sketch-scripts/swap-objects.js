{/*
Snagged this from Kumo!
https://github.com/kumo
*/}

if ([selection count] != 2) {

	[doc showMessage:"Select two objects and try again!"];

} else {

	var obj1 = selection[0];
	var obj2 = selection[1];

	var obj1_frame = [obj1 frame];
	var obj2_frame = [obj2 frame];

	var obj1_height= [obj1_frame height];
	var obj2_height= [obj2_frame height];
	var height_diff = obj1_height - obj2_height;

	var temp_x = [obj1_frame x];
	var temp_y = [obj1_frame y];

	[obj1_frame setX: [obj2_frame x]];
	[obj1_frame setY: [obj2_frame y] - height_diff];

	[obj2_frame setX: temp_x];
	[obj2_frame setY: temp_y + height_diff];

}
