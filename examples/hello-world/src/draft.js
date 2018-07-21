import {Page} from './page.js';

export function onShowStickers(context) {
  let window = new StickersUI(context);
  window.showHide();
}


// let's get a hold on the Sketch API
const sketch = require('sketch')
const UI = require('sketch/ui')
const Style = require('sketch/dom').Style

export default function(context) {
  // We are passed a context variable when we're run.
  // We use this to get hold of the native Sketch document and wrap it.
  const document = sketch.fromNative(context.document)

  // Next we want to extract the selected page of the selected (front-most) document
  const page = document.selectedPage

  const duds = UI.getStringFromUser("What's your name?", 'Appleseed')
  // const options = ['Sketch', 'Framer', 'Adobe UD']
  //
  // const selection = UI.getSelectionFromUser(
  //   "What's your favorite design tool?",
  //   options
  // )
  //
  // const ok = selection[1]
  // const value = options[selection[1]]
  // if (ok) {
  //   // do something
  // }



  // Now let's create a new text layer, and a traditional value...
  const layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: "duds",
  })

  // Show a Modal Take over
  // UI.alert('my title', 'Hello World!')

  // Show a Message below
  UI.message('Hello world!')



  const shape = new sketch.Shape({
    parent: page,
    frame: {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    },
    style: {
      fills: ['#ff000090'],
      borders: [],
    },
  })
  // ...resize it so that the text just fits...
  layer.adjustToFit()

  // Finally, lets center the view on our new layer
  // so that we can see where it is.
  document.centerOnLayer(layer)
  document.centerOnLayer(shape)
}

UI.message('Hello world!')

const shape = new sketch.Shape({
  parent: page,
  frame: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
  },
  style: {
    fills: ['#ff000090'],
    borders: [],
  },
})

layer.adjustToFit()

document.centerOnLayer(layer)
document.centerOnLayer(shape)

{/*
export default function (context) {
  const selectedLayers = context.selection
  const selectedCount = selectedLayers.length

  if (selectedCount === 0) {
    context.document.showMessage('No layers are selected.')
  } else {
    context.document.showMessage(`${selectedCount} layers selected.`)
  }
}
*/}


export default function(context) {
  const document = sketch.fromNative(context.document)
  const page = document.selectedPage

  const pageName = UI.getStringFromUser("What is the page name?", 'page name')

  const layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: pageName,
  })

  layer.adjustToFit()

  document.centerOnLayer(layer)

  // How to make a blank page awesome!
  context.document.documentData().addBlankPage()
}




export default function(context) {
  const document = sketch.fromNative(context.document)
  const page = document.selectedPage

  const options = ['Ux Flow', 'Redlines', 'Assets']

  // const selectPageType = UI.getSelectionFromUser(
  //   "What type of page would you like?",
  //   options
  // )

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


    const layer = new sketch.Text({
      parent: page,
      alignment: sketch.Text.Alignment.center,
      text: "dude",
    })


    document.centerOnLayer(layer)

    // How to make a blank page awesome!
    // context.document.documentData().addBlankPage()
  }
