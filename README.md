# Sketch Plugin Sketch Book
💎 Landing spot for starting, building, and testing of plugins for sketch. Tips, tricks and a running progress of learning how to create a Plugin.

----

## plugin-basics
Creating, running, and debugging the basics of plugins.

### Running a plugin
- Navigate to the directoy cd ..
- Build the plugin ```npm run build```
- Lauch Sketch, open a document
- Choose Plugin > **PLUGIN NAME** > **COMMAND**
- 🎉 Donezo

### Watching the plugin
- ```npm run watch```

### Console for debugging
Important for debugging your plugin.

1. Open Console
2. Create a search filter for
  - ```process: Sketch```
  - ```library: Sketch```
3. Save this filter


----

## Tips
- [Action API](http://developer.sketchapp.com/guides/action-api/) - An action is an event that happens in the app, usually as a consequence of a user interaction. Actions have names like CloseDocument, DistributeHorizontally or TogglePresentationMode, and you can tell your plugin to run bits of code when those actions are triggered.

## Resources
#### Links
- [Sketch - Your First Plugin](http://developer.sketchapp.com/guides/first-plugin/)
