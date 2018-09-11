var Timer = require('./src.js');
var timer = new Timer();

timer.set(2000);

var passObj = { hello: 'world',this:'is-me'}
var pass2 = { hello: 'heaven',this:'is-me'}

timer.once('end',function(args){
    console.log('Ended',args);
    timer.start('test 1 3 4');
    timer.once('end',function(args){
        console.log('Ended 2',args)
    })
});
timer.start(passObj,pass2);