# Resources

This is a simple example, which illustrates how to bundle resource files along with your Plugin, and access them from your code. Note the `skpm.assets` field in the [package.json](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/resources/package.json) which is telling `skpm` to bundle all the files in the ["assets" folder](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/resources/assets) into the plugin.

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

## Usage

Download the example or [clone the repo](https://github.com/BohemianCoding/SketchAPI):

```bash
curl https://codeload.github.com/BohemianCoding/SketchAPI/tar.gz/develop | tar -xz --strip=2 SketchAPI-develop/examples/resources
cd resources
```

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

## Debugging

To view the output of your `console.log`, you have a few different options:

* Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
* Open `Console.app` and look for the sketch logs
* Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input
