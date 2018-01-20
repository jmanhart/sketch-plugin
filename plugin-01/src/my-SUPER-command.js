



export default function settings(context){
  // This function will display the dialog window
  var alert = COSAlertWindow.new();

  alert.setIcon(NSImage.alloc().initByReferencingFile(plugin.urlForResourceNamed("rectangle@2x.png").path()));
  alert.setMessageText("Configure your confetti")

  // Creating dialog buttons
  alert.addButtonWithTitle("Ok");
  alert.addButtonWithTitle("Cancel");

  // Creating the view
  var viewWidth = 300;
  var viewHeight = 140;

  var view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight));
  alert.addAccessoryView(view);
  // Create and show dialog window
  var window = createWindow(context);
  var alert = window[0];

  var response = alert.runModal() // This part shows the dialog windows and stores the 'response' in a variable

}
