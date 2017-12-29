{/*
Mine Sucker!

var selection = context.selection
for (var i=0; i<selection.count(); i++) {
  var layer = selection[i]
  log('layer ' + layer.name + ' is selected.')
}

context.document.showMessage('Document Opened')
[doc askForUserInput:"How many copies do you want?" initialValue:"50"]

var selection = context.selection
for (var i=0; i<selection.count(); i++) {
  var layer = selection[i]
  [doc showMessage: 'layer ' + layer.name + ' is selected.']
}
*/}


  // We are passed a context variable when we're run.
  // We use this to get hold of a javascript object
  // which we can use in turn to manipulate Sketch.
  var sketch = context.api()

  // Next we want to extract the selected page of the selected (front-most) document
  var document = sketch.selectedDocument
  var page = document.selectedPage

  // Now let's create a new text layer, using a large font, and a traditional value...
  var layer = page.newText({alignment: NSTextAlignmentCenter, systemFontSize: 36, text:"Hello World"})

  // ...resize it so that the text just fits...
  layer.resizeToFitContents()

  // Finally, lets center the view on our new layer
  // so that we can see where it is.
  document.centerOnLayer(layer)
