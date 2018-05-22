
const sketch = require('sketch')
const UI = require('sketch/ui')
const Style = require('sketch/dom').Style




export class Page {
  constructor(context) {
    this.context = context;
  }

  drawShape() {
    UI.getStringFromUser("What's your name?", 'Appleseed')
  }

}
