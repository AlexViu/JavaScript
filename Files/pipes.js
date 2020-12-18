const fs=require('fs');

var readStream=fs.createReadStream(__dirname+' ghettobrothers.txt', {highWaterMark: 1});
var writeStream= fs.createWriteStream(__dirname+ '/ghettocopia.txt');

readStream.on('data', function(chunk){
    console.log('new piece recieved');
    writeStream.write(chunk);
});