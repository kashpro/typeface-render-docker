console.log("hello world");

var fs = require('fs')
  , gm = require('gm');

gm('./1.webp')
.rotate('green', 45)
.write('./crazy.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
})