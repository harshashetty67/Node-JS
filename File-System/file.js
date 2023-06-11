const file = require('fs'); // To work with the file system

file.readdir('../NODE-JS/Express/',
(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
console.log('success',files);
    } 
});


