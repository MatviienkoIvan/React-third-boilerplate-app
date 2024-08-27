var React = require("react");
var ReactDOM = require("react-dom");
var { Router, Route, IndexRoute, hasHistory } = require("react-router");

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
 <p>Boilerplate 3 Project</p>,
  document.getElementById("rootApp")
);

require('./redux/redux-example.jsx');
// require('./redux/redux-todo-example.jsx');
