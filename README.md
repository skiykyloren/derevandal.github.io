# My personal website

[![Build Status](https://travis-ci.org/derevandal/derevandal.github.io.svg?branch=master)](https://travis-ci.org/derevandal/derevandal.github.io)
[![devDependencies Status](https://david-dm.org/derevandal/derevandal.github.io.svg)](https://david-dm.org/derevandal/derevandal.github.io?type=dev)

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](https://babeljs.io/)

## Run the project locally

**1 -** Prepare the environment:

```sh
$ npm install -g node-gyp
$ npm install -g gulp-cli
```

[node-gyp installation](https://github.com/nodejs/node-gyp#installation)

**2 -** Clone the project and install the dependencies:

```sh
git clone https://github.com/derevandal/derevandal.github.io.git
cd ddpmga.github.io
npm install
```

**3 -** Run static server and [BroserSync](https://www.browsersync.io/):

```sh
$ gulp server
```

## Automatic Tasks

- `$ gulp pug`: Compile Pug.
- `$ gulp stylus`: Compile Stylus.
- `$ gulp stylint`: Lint Stylus files.
- `$ gulp lint`: Lintm Javascript files.
- `$ gulp babel`: Babel transpiler.
- `$ gulp svgsprite`: Make SVG sprite from icon's folder.
- `$ gulp responsive`: Make images `background-*` responsive.
- `$ gulp imagemin`: Minify images.
- `$ gulp watch`: Watch project for changes.
- `$ gulp browserSync`: Init browserSync.
- `$ gulp clean`: Clean `assests` folder.
- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp server`: Watch the files to build and start a static server.


## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/derevandal/derevandal.github.io/issues/) the next steps of the project ;)
Want to contribute? [Follow these recommendations](CONTRIBUTING.md).

## License
This application is under [MIT](LICENSE.md)

Forked from [Afonso Pacifer](http://afonsopacifer.com/)