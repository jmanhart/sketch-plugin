// Ref-ing the Sketch API
var sketch = context.api()

// Selecting a doc & Artboard
var document = sketch.selectedDocument
var page = document.selectedPage

// Next we want to extract the selected page of the selected (front-most) document
var count = [doc askForUserInput:"What copy would you like?" initialValue:"Text Here"]


var layer = page.newText({
  text: count
})

document.centerOnLayer(layer)
