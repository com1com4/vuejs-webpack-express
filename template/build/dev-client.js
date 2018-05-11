/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

var querystring = require('querystring');
var qs = querystring.parse(document.location.search.slice(1));
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    if(qs.__hmr_reload === 'true')
    window.location.reload()
  }
})
