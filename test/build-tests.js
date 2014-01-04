var fs = require('fs');
var Meta = (require('../lib/meta'))();

var compiler = Meta.compilerFromFile('./test/meta-test.mjs');
var js = compiler.compile();

fs.writeFileSync('./test/meta-test.js', js);