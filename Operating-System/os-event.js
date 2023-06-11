const opSys = require('os');

//----------------OS related properties and function-------------

console.log(opSys.networkInterfaces()[0]); // network interfaces

console.log(opSys.arch()); // Returns os-architecture

console.log(opSys.cpus()); // Returns an array of objects containing information about each logical CPU core.

console.log(opSys.EOL); // To get newLine char on a given os-system 

console.log(opSys.hostname()); // Returns the hostname of the machine on which os is running

console.log(opSys.type()); // Returns the type of os

console.log(`Total Memory : ${Math.round(opSys.freemem()/(1024*1024))} MB`); // Returns the amount of free system memory in bytes as an integer. Here its converted to MB

console.log(opSys.userInfo()); // Returns the info about current user.


//-------There are lot of os related function and properties available. See : https://nodejs.org/dist/latest-v18.x/docs/api/os.html#oshostname for more details.

