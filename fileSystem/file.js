const fs = require('fs');
const text = 'I living japan'
//  wright file
fs.writeFile('demo.txt',text, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('successfull')
    }
})
//  append file
fs.appendFile('text1.txt',text, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('successfull')
    }
})
//  rename file
fs.readFile('text1.txt','utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});
//  file rename
fs.rename('text1.txt', 'demo1.txt',(err)=>{
    if(err){
        console.log(err)
    }
});
//  delete file
fs.unlink('demo1.txt', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Successfylly')
    }
});

//  exists kore kina kono file
fs.exists('demo1.txt', (result)=>{
    if(result){
        console.log('file found')
    }
    else{
        console.log('File not found')
    }
})
