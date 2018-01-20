
function settings(context){
  // This function will display the dialog window

  // Create and show dialog window
  var window = createWindow(context);
  var alert = window[0];

  var response = alert.runModal() // This part shows the dialog windows and stores the 'response' in a variable

}
