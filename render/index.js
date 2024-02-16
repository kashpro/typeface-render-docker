const fs = require('fs');
const gm = require('gm');

const picture = fs.readFileSync('./1.webp');


gm(picture)
.rotate('green', 45)
.noise('laplacian')
.write('./crazy.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
})

gm(picture)
.rotate('red', 0)
.noise('laplacian')
.write('./crazy2.jpg', function (err) {
  if (!err) console.log('crazytown2 has arrived');
})