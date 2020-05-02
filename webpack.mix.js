let mix = require('laravel-mix');

mix.js('public/javascripts/main.js', 'dist')
   .sass('public/sass/main.scss', 'dist')
   .setPublicPath('public');

if ( process.env.sync ) {

  /*
    * Monitor files for changes and inject your changes into the browser.
    *
    */
  mix.browserSync( {
    proxy : 'http://localhost:7777',
    files : [
      'dist/**/*',
      'javascripts/*.js',
      'sass/main.scss',
      'templates/**/*.pug',
    ]
  } );
}