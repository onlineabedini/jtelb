// packages
const fs = require('fs');
const { Telegraf } = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const LocalSession = require('telegraf-session-local')
const dir_app = require('./dir_app')

let reply = ''
let keyboard_list = ''
let functions = {}
let bot = ''
let defien_function = "fun."

module.exports = new class bot_app {
    define_bot(token, start_message) {
        // config
        this.configure_bot(token)
        this.bot_directiries_build()
        this.require_func()

        // Bot Ans
        this.bot_start(start_message)
        this.bot_middleware()

        this.bot_hears()
        this.lunch_bot()
    }

    configure_bot(token) {
        // define bot
        bot = new Telegraf(token)
        bot.use((new LocalSession({ database: 'jtelb_data.json' })).middleware())
    }

    bot_directiries_build() {
        dir_app.build_middleware()
        dir_app.build_function()
        dir_app.build_reply()
        dir_app.build_keyboard()
        dir_app.build_src()

        reply = require('./data_app/reply')
        keyboard_list = require('./data_app/keyboard')
    }

    require_func() {
        fs.readdirSync(__dirname + './../../functions/').forEach(file => {
            functions = require(__dirname + `./../../functions/${file}`)
        })
    }

    bot_start(start_message) {
        // start
        bot.start((ctx) => {
            const keyboard = Keyboard.make(keyboard_list.main_keyboard);
            ctx.session.username = ctx.message.from.username
            ctx.session.name = ctx.message.from.first_name
            ctx.session.status = "started"

            let sr_msg = start_message ? start_message : `Hello ${ctx.session.name}! I am irnode_tlb_bot.`
            ctx.reply(sr_msg, keyboard.reply())
        })
    }

    bot_middleware() {
        bot.use((ctx, next) => {
            fs.readdirSync(__dirname + './../../middleware/').forEach(file => {
                let middleware = require(__dirname + `./../../middleware/${file}`)
                middleware.data(ctx)
            })
            next()
        })
    }

    bot_hears() {
        bot.hears(Object.keys(reply.replyes), (ctx) => {

            let ans = reply.replyes[ctx.match[0]][0]
            let array_num = 0
            for (let states of ans) {
                if (states[0] === ctx.session.status || states[0] === '*') {
                    const faq_keyboard = Keyboard.make(keyboard_list[states[2]] ? keyboard_list[states[2]] : keyboard_list.main_keyboard);

                    if (states[1].toString().includes(defien_function)) {
                        let func_name = states[1].toString().split('.')[1]
                        if (func_name.includes('(')) func_name = func_name.split('(')[0]
                        functions[func_name](ctx)
                    } else {
                        ctx.reply(states[1] ? states[1] : "not defined by admin!", faq_keyboard.reply())
                    }
                } else {
                    array_num++
                }

                if (array_num === ans.length) {
                    ctx.reply("please complete your current proccess first!")
                }
            }
            ctx.session.status = reply.replyes[ctx.match[0]][1] ? reply.replyes[ctx.match[0]][1] : "started"
        })
    }

    lunch_bot() {
        try {
            bot.launch()
        }
        catch {
            console.log("Please set your token in the file: index.js")
        }
    }
}
