
// let's get a hold on the Sketch API
const sketch = require('sketch')
const UI = require('sketch/ui')
const Style = require('sketch/dom').Style

export default function(context) {
  const document = sketch.fromNative(context.document)
  const page = document.selectedPage

  const options = ['Ux Flow', 'Redlines', 'Assets']

  const selection = UI.getSelectionFromUser(
    "What type of page would you like?",
    options
  )

  const uxFlow = selection[0]
  const redlines = selection[1]

  if (uxFlow) {
    context.document.documentData().addBlankPage()
  }
  if (redlines) {
    context.document.documentData().addBlankPage()
  }



  // const uxFlow = selection[0]
  // const redLines = selection[1]
  // const assets = selection[2]

  // const ok = selection[2]
  // if (ok) {
  //   context.document.documentData().addBlankPage()
  // }
  // const pageTypeSelected = options[selection[1]]

  const layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: "dude",
  })



  // This function will display the dialog window



  document.centerOnLayer(layer)

  // How to make a blank page awesome!
  // context.document.documentData().addBlankPage()
}
