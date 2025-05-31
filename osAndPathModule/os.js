const os = require('os');
console.log(os.userInfo());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.cpus());
console.log(os.arch());
console.log(os.platform());
console.log(os.platform());
console.log(os.type());
console.log(__dirname);
console.log(__filename);


//  path 

const path = require('path');
const fileName = '/d/level-2/node/osAndPathModule/text.txt;'
console.log(path.extname('index.html'));
console.log(path.dirname(fileName));
console.log(path.basename(fileName));
console.log(path.extname(fileName));
console.log(path.join(__dirname, '/views'))