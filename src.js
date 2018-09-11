
var EventEmitter = require('events').EventEmitter;

class timer extends EventEmitter {
    constructor(){
        super();
    }
    set(s){
        this.s = s;
        return;
    }
    start(){
        this.args = [];
        for(var key in arguments){
            this.args.push(arguments[key]);
        }
        if(this.args.length == 1){
            this.args = this.args[0]
        }
        var self = this;
        self.emit('start');
        var c = 0;
        var s = self.s;
        var t = setInterval(function () {
            c++;
            if (c == s) {
                self.emit('end',self.args);
                clearInterval(t);    
            }
        }, 1);
        return;
    }
}

module.exports = timer;

