
// let's get a hold on the Sketch API
const sketch = require('sketch')
const UI = require('sketch/ui')
const Style = require('sketch/dom').Style

// we will also need a function to transform an NSArray into a proper JavaScript array
// the `sketch-utils` package contains such a function so let's just use it.
// it was installed using `npm install --save sketch-utils`
const toArray = require('sketch-utils/to-array')


export default function(context) {
  // We are passed a context variable when we're run.
  // We use this to get hold of the native Sketch document and wrap it.
  const document = sketch.fromNative(context.document)

  // Next we want to extract the selected page of the selected (front-most) document
  const page = document.selectedPage

  // Now let's create a new text layer, and a traditional value...
  const layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: 'Hello World',
  })

  // ...resize it so that the text just fits...
  layer.adjustToFit()

  // Finally, lets center the view on our new layer
  // so that we can see where it is.
  document.centerOnLayer(layer)
}
