var fs = require('fs')

fs.appendFile('log0.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log0.txt')
})

fs.appendFile('log1.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log1.txt')
})
fs.appendFile('log2.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log2.txt')
})
fs.appendFile('log3.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log3.txt')
})
fs.appendFile('log4.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log4.txt')
})
fs.appendFile('log5.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log5.txt')
})
fs.appendFile('log6.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log6.txt')
})
fs.appendFile('log7.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log7.txt')
})
fs.appendFile('log8.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log8.txt')
})
fs.appendFile('log9.txt', 'hello world', function(err){
    if(err) throw err
    console.log('log9.txt')
})

fs.unlink('log0.txt', function(err){
    if(err) throw err
    console.log('delete files...log0.txt')
})
fs.unlink('log1.txt', function(err){
    if(err) throw err
    console.log('delete files...log1.txt')
})
fs.unlink('log2.txt', function(err){
    if(err) throw err
    console.log('delete files...log2.txt')
})
fs.unlink('log3.txt', function(err){
    if(err) throw err
    console.log('delete files...log3.txt')
})
fs.unlink('log4.txt', function(err){
    if(err) throw err
    console.log('delete files...log4.txt')
})
fs.unlink('log5.txt', function(err){
    if(err) throw err
    console.log('delete files...log5.txt')
})
fs.unlink('log6.txt', function(err){
    if(err) throw err
    console.log('delete files...log6.txt')
})
fs.unlink('log7.txt', function(err){
    if(err) throw err
    console.log('delete files...log7.txt')
})
fs.unlink('log8.txt', function(err){
    if(err) throw err
    console.log('delete files...log8.txt')
})
fs.unlink('log9.txt', function(err){
    if(err) throw err
    console.log('delete files...log9.txt')
})