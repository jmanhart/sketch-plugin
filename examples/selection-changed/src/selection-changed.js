
const sketch = require('sketch')
const toArray = require('sketch-utils/to-array')


export function onSelectionChanged(context) {

  // Super important - Required with the handler in the manifest
  const action = context.actionContext

  // Wrapping the document
  const document = sketch.fromNative(action.document)

  // Transforming the Arry
  const selection = document.selectedLayers

  const count = selection.length

  sketch.UI.message(selection, document)

  // if (count === 0) {
  //   sketch.UI.message('No layers selected!', document)
  // } else {
  //   const message =
  //     count === 1 ? '1 layer selected' : `${count} layers selected`
  //   sketch.UI.message(message, document)
  // }

}
