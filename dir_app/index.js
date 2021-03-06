const fs = require('fs');
const directory = './../../../bot_app/'

const default_middleware_data = require('./default_data/middleware').default_data

const default_functions_data = require('./default_data/function').default_data

const default_keyboard_data = require('./default_data/keyboard').default_data

const default_reply_data = require('./default_data/reply').default_data

const default_ignore_data = require('./default_data/ignore').default_data

module.exports = new class dir_app {
    constructor() {
        this.build_main()
        this.build_bfs()
        this.build_middleware()
        this.build_function()
        this.build_reply()
        this.build_keyboard()
        this.build_ignore()
    }

    build_main() {
        if (!fs.existsSync(__dirname + directory)) fs.mkdirSync('./bot_app')
    }

    build_bfs() {
        if (!fs.existsSync(__dirname + directory + 'bfs')) {
            fs.mkdirSync('./bot_app/bfs');
            fs.writeFileSync('./bot_app/bfs/main_bfs_middleware.js', default_middleware_data)
        }
    }

    build_middleware() {
        if (!fs.existsSync(__dirname + directory + 'middleware')) {
            fs.mkdirSync('./bot_app/middleware');
            fs.writeFileSync('./bot_app/middleware/main_middleware.js', default_middleware_data)
        }
    }

    build_function() {
        if (!fs.existsSync(__dirname + directory + 'functions')) {
            fs.mkdirSync('./bot_app/functions');
            fs.writeFileSync('./bot_app/functions/main_functions.js', default_functions_data)
        }
    }

    build_reply() {
        if (!fs.existsSync(__dirname + directory + 'reply')) {
            fs.mkdirSync('./bot_app/reply');
            fs.writeFileSync('./bot_app/reply/main_replies.js', default_reply_data)
        }
    }

    build_keyboard() {
        if (!fs.existsSync(__dirname + directory + 'keyboard')) {
            fs.mkdirSync('./bot_app/keyboard');
            fs.writeFileSync('./bot_app/keyboard/main_keyboard.js', default_keyboard_data)
        }
    }
    build_ignore(){
        if (!fs.existsSync(__dirname + '.gitignore')) {
            fs.writeFileSync('./.gitignore', default_ignore_data)
        }
    }

}