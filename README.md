# Panorama Template
Stripped-down, modernized (as of April 2016) version of the [American Panorama template](https://github.com/americanpanorama/panorama-template). This template/boilerplate offers a starting point for creating applications that use components from [Stamen](http://stamen.com)'s [Panorama toolkit](https://github.com/stamen/panorama). It is built using [React](https://facebook.github.io/react/), [Redux](redux.js.org), and [React Router](https://github.com/reactjs/react-router), but uses only a minimal subset of offerings from each. While designed to be used with [Panorama toolkit](https://github.com/stamen/panorama), at it's heart it's really just a React project template, and can be used with or without the Panorama components.


## Setup
#### 1. Set up required Node version

Ensure that your Node version matches that present in `.nvmrc`.
[`nvm`](https://github.com/creationix/nvm) is the easiest way to do this on Mac, [`nvm-windows`](https://github.com/coreybutler/nvm-windows/releases) on Windows. Installation instructions are in each of those links.

To use `nvm` to switch Node versions:

```bash
$ nvm install
Found '/Users/ericsoco/stamen/panorama-template/.nvmrc' with version <5.9.1>
######################################################################## 100.0%
Now using node v5.9.1 (npm v2.11.3)
```

NOTE: you'll need to run `nvm install` (or `nvm use`) in each shell instance.

#### 2. Install dependencies

Make sure you have [npm](https://www.npmjs.com/) installed. Note: **version > 2.7.0 is required** to install scoped packages, such as `@panorama/toolkit`. Instructions for updating npm are [here](https://docs.npmjs.com/getting-started/installing-node#updating-npm).

Load required **npm** modules.

```bash
npm install
```


## Develop
To run locally:

```bash
npm start
```
Open browser to [http://localhost:8888/](http://localhost:8888/)



##Deploy
**To use development code**: Copy the [build directory](./build) to your server, but for **production** you will want to run:

```npm run dist```

This will create a `dist` directory. Move this directory to your server.

Both directories are all **static files**, so no special server requirements needed.

#### Serving from a path other than root

If you're deploying to a path other than `'/'`, use the `--baseUrl` parameter when running a build script (e.g. `npm run dist`). In order for `react-router` to resolve routes correctly, its history instance must be set up with the correct [`basename`](https://github.com/reactjs/react-router/issues/353#issuecomment-147698452). With a basename set up, static resouces at relative paths (e.g. stylesheets and scripts loaded from `index.html`) will not load correctly when one or more paths deep in the application/router URL. So, we complement `react-router`'s `basename` with a [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) tag, and set `href` to the same value (i.e. `<base href="<baseUrl>">`).

This is an issue when deploying to studio.stamen.com; therefore, there is already an `npm` script set up to make this easier in `package.json`, called `dist-studio`. Modify the `--baseUrl` param value accordingly to use it.

The `baseUrl` value gets written to a node environment variable when running locally (served via `gulp-connect`), hardcoded into the compiled application with [`loose-envify`](https://www.npmjs.com/package/loose-envify), and written to `index.html` using [`gulp-html-replace`](https://www.npmjs.com/package/gulp-html-replace).



## Structure

The template is written in ES6, and compiled down to ES5 via [Babel](https://babeljs.io). All of the application setup happens in [`main.jsx`](./src/main.jsx).

#### Redux
A single Redux [store](http://redux.js.org/docs/basics/Store.html) and [action creator](http://redux.js.org/docs/basics/Actions.html) are instantiated there, and passed down into the application. They are passed through the React component tree, available as props (in a component, as `this.props.store` and `this.props.actions`, respectively). This pattern allows the application to be used in a server-rendering context as well, keeping application state separate for each session. [Reducers](http://redux.js.org/docs/basics/Reducers.html) live in [`reducers.js`](./src/reducers.js), and the action creator exists within [`actions.js`](./src/actions.js).

#### Router configuration
React Router acts as the primary framework within which applications using this template are built. The router configuration (mapping of paths to views) exists within the React `render()` call in [`main.jsx`](./src/main.jsx). Router views are generally defined within [`./src/views/`](./src/views/), while local components (those not imported from Panorama) live within [`./src/components/`](./src/components/). This runs parallel to the concept of ["container and presentational" components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.mcwowhpa9).

#### Sass variables
The template uses [`gulp-json-sass`](https://github.com/rbalicki2/gulp-json-sass) to allow variables to be shared across Sass and JavaScript. Variables added to [`variables.json`](./scss/variables.json) can be `import`ed into JavaScript files. The project build compiles them into Sass variables, which are imported from [`variables-derived.scss`](./scss/variables-derived.scss). Examples of this exist within [`App.jsx`](./src/views/App.jsx) and [`_layout.scss`](./scss/_layout.scss).

#### Skeleton
The template uses a slightly modified [Sass version](https://github.com/WhatsNewSaes/Skeleton-Sass) of [Skeleton](http://getskeleton.com/). To minimize the compiled CSS footprint, comment out any unused Skeleton modules in [`_skeleton.scss`](./scss/lib/_skeleton.scss).

