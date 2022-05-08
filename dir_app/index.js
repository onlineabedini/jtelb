const fs = require('fs');
const directory = './../../../'

const default_middleware_data = require('./default_data/middleware').default_data

const default_functions_data = require('./default_data/function').default_data

const default_keyboard_data = require('./default_data/keyboard').default_data

const default_reply_data = require('./default_data/reply').default_data

module.exports = new class dir_app {
    // middleware
    build_middleware(){
        if (!fs.existsSync(__dirname + directory + 'middleware')){
            fs.mkdirSync('./middleware');
            fs.writeFileSync('./middleware/main_middleware.js', default_middleware_data)
        }
    }
   
    // function
    build_function(){
        if (!fs.existsSync(__dirname + directory + 'functions')){
            fs.mkdirSync('./functions');
            fs.writeFileSync('./functions/main_functions.js', default_functions_data)
        }
    }

    // reply
    build_reply(){
        if (!fs.existsSync(__dirname + directory + 'reply')){
            fs.mkdirSync('./reply');
            fs.writeFileSync('./reply/main_replies.js', default_reply_data)
        }
    }

    // keyboard
    build_keyboard(){
        if (!fs.existsSync(__dirname + directory + 'keyboard')){
            fs.mkdirSync('./keyboard');
            fs.writeFileSync('./keyboard/main_keyboard.js', default_keyboard_data)
        }
    }

    // src
    build_src(){
        if (!fs.existsSync(__dirname + directory + 'src')){
            fs.mkdirSync('./src');
        }
    }
}