

  // We are passed a context variable when we're run.
  // We use this to get hold of a javascript object
  // which we can use in turn to manipulate Sketch.
  var sketch = context.api()

  // Next we want to extract the selected page of the selected (front-most) document
  var document = sketch.selectedDocument
  var page = document.selectedPage

  // Now let's create a new text layer, using a large font, and a traditional value...
  var layer = page.newText({
    alignment: "right",
    text:"Hello World"
  })
  // ...resize it so that the text just fits...
  layer.resizeToFitContents()

  // Finally, lets center the view on our new layer
  // so that we can see where it is.
  document.centerOnLayer(layer)
