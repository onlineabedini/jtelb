const fs = require('fs');
const directory = './../../../bot_app/'

const default_middleware_data = require('./default_data/middleware').default_data

const default_functions_data = require('./default_data/function').default_data

const default_keyboard_data = require('./default_data/keyboard').default_data

const default_reply_data = require('./default_data/reply').default_data

module.exports = new class dir_app {
    constructor(){
        this.build_main()
        this.build_middleware()
        this.build_function()
        this.build_reply()
        this.build_keyboard()
    }

    build_main(){
        if (!fs.existsSync(__dirname + directory)) fs.mkdirSync('./bot_app')
    }

    build_middleware(){
        if (!fs.existsSync(__dirname + directory + 'middleware')){
            fs.mkdirSync('./bot_app/middleware');
            fs.writeFileSync('./bot_app/middleware/main_middleware.js', default_middleware_data)
        }
    }
   
    build_function(){
        if (!fs.existsSync(__dirname + directory + 'functions')){
            fs.mkdirSync('./bot_app/functions');
            fs.writeFileSync('./bot_app/functions/main_functions.js', default_functions_data)
        }
    }

    build_reply(){
        if (!fs.existsSync(__dirname + directory + 'reply')){
            fs.mkdirSync('./bot_app/reply');
            fs.writeFileSync('./bot_app/reply/main_replies.js', default_reply_data)
        }
    }

    build_keyboard(){
        if (!fs.existsSync(__dirname + directory + 'keyboard')){
            fs.mkdirSync('./bot_app/keyboard');
            fs.writeFileSync('./bot_app/keyboard/main_keyboard.js', default_keyboard_data)
        }
    }

}