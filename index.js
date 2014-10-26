var _ = require("underscore"); // it goes and looks inside the node_modules folder

var friends = ["John", "Jane"];

var footastic = require("/lib/foo.js");

_.each.friends = function(friend) {
  console.log(friend);
};