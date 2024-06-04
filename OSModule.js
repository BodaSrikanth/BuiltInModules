const os = require('os');

console.log('OS Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('Network Interfaces:', os.networkInterfaces()); 