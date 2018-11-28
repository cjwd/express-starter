# Express Starter

## Features

* Modern Javascript
* Webpack for compiling assets, optimizing images, and concatenating and minifying files
* Pug as a templating engine
* Controller for passing data to Pug templates
* Bulma CSS framework
* Yarn

## File Structure

```
your-project/
├── dist/
├── controllers/
├── public/
|  ├── javascripts/
|  ├── sass/
├── routes/
├── templates
|  ├── layouts
|  |   ├── base.pug
|  ├── mixins
|  ├── partials
|  ├── views
|  |   ├── error.pug
|  |   ├── index.pug
├── app.js
├── example.variables.env
├── package.json
├── README.md
├── start.js
├── webpack.config.js
├── yarn.lock

```
## Build Commands

* `yarn start` - Compile assets when file changes are made
* `yarn build` — Compile and optimize the files in your public directory
* `yarn build:prod` — Compile assets for production