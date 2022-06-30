// packages
const fs = require('fs');
const { Telegraf } = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const LocalSession = require('telegraf-session-local')
const dir_app = require('./dir_app')
const def_data = require('onlineabedini_jtdata')

let reply = ''
let keyboard_list = ''
let functions = {}
let bot = ''

module.exports = new class bot_app {
    define_bot(token, start_message) {
        this.configure_bot(token)
        this.bot_directiries_build()
        this.require_func()

        this.bot_start(start_message)
        this.bot_middleware()

        this.bot_hears()
        this.lunch_bot()
    }

    configure_bot(token) {
        bot = new Telegraf(token)
        bot.use((new LocalSession({ database: def_data.def_local_session })).middleware())
    }

    bot_directiries_build() {
        dir_app
        reply = require('./data_app/reply')
        keyboard_list = require('./data_app/keyboard')
    }

    require_func(sec_path) {
        let path = __dirname + '/../../bot_app/functions/'
        if (sec_path) path = sec_path
        fs.readdirSync(path).forEach(file => {
            if (fs.lstatSync(path + file).isDirectory()) {
                let new_path = path + file + '/'
                this.require_func(new_path)
            } else if (file.endsWith('.js')) {
                functions = require(path + file)
            } else {
                console.log("not a function in path: " + path)
            }
        })
    }

    bot_start(start_message) {
        bot.start((ctx) => {
            const keyboard = Keyboard.make(keyboard_list.main_keyboard);
            ctx.session.username = ctx.message.from.username
            ctx.session.name = ctx.message.from.first_name
            ctx.session.status = "started"

            let sr_msg = start_message ? start_message : `Hello ${ctx.session.name}! I am irnode_tlb_bot.`
            ctx.reply(sr_msg, keyboard.reply())
        })
    }

    bot_middleware(sec_path) {
        let path = __dirname + '/../../bot_app/middleware/'
        if (sec_path) path = sec_path

        fs.readdirSync(path).forEach(file => {
            if (fs.lstatSync(path + file).isDirectory()) {
                let new_path = path + file + '/'
                this.bot_middleware(new_path)
            } else if (file.endsWith('.js')) {
                let middleware = require(path + file)
                for (let func in middleware) {  
                    bot.use((ctx, next) => {
                        middleware[func](ctx, next)
                    })
                }
            }
        })
    }

    bot_hears() {
        this.hear_inline()
        this.hear_ctx()
    }

    hear_inline() {
        bot.use((ctx, next) => {
            if (ctx?.update?.callback_query?.data) {
                let ans = reply.replyes[ctx?.update?.callback_query?.data]
                let array_num = 0
                for (let states of ans) {
                    if (states[0] === ctx.session.status || states[0] === '*') {
                        let faq_keyboard
                        if (states[2].toString().startsWith(def_data.define_inline)) faq_keyboard = Keyboard.make(keyboard_list[states[2].split('.')[1]] ? keyboard_list[states[2].split('.')[1]] : keyboard_list.main_keyboard);
                        else faq_keyboard = Keyboard.make(keyboard_list[states[2]] ? keyboard_list[states[2]] : keyboard_list.main_keyboard);
                        try {
                            if (states[1].toString().includes(def_data.defien_function)) {
                                let func_name = states[1].toString().split('.')[1]
                                if (func_name.includes('(')) func_name = func_name.split('(')[0]
                                functions[func_name](ctx)
                                ctx.session.status = states[3] ? states[3] : def_data.define_main_session
                            } else {
                                if (states[2].toString().startsWith(def_data.define_inline)) ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.inline())
                                else ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.reply())
                                ctx.session.status = states[3] ? states[3] : def_data.define_main_session
                            }
                        } catch {
                            if (states[2].toString().startsWith(def_data.define_inline)) ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.inline())
                            else ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.reply())
                            ctx.session.status = states[3] ? states[3] : def_data.define_main_session
                        }
                    } else {
                        array_num++
                    }

                    if (array_num === ans.length) {
                        ctx.reply(def_data.def_current_session)
                    }
                }

            }
            next()
        })
    }

    hear_ctx() {
        bot.hears(Object.keys(reply.replyes), (ctx) => {
            if (!ctx?.update?.callback_query?.data) {
                let ans = reply.replyes[ctx.match[0]]
                let array_num = 0
                for (let states of ans) {
                    if (states[0] === ctx.session.status || states[0] === '*') {
                        let faq_keyboard
                        if (states[2].toString().startsWith(def_data.define_inline)) faq_keyboard = Keyboard.make(keyboard_list[states[2].split('.')[1]] ? keyboard_list[states[2].split('.')[1]] : keyboard_list.main_keyboard);
                        else faq_keyboard = Keyboard.make(keyboard_list[states[2]] ? keyboard_list[states[2]] : keyboard_list.main_keyboard);
                        try {
                            if (states[1].toString().includes(def_data.defien_function)) {
                                let func_name = states[1].toString().split('.')[1]
                                if (func_name.includes('(')) func_name = func_name.split('(')[0]
                                functions[func_name](ctx)
                                ctx.session.status = states[3] ? states[3] : def_data.define_main_session
                            } else {
                                if (states[2].toString().startsWith(def_data.define_inline)) ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.inline())
                                else ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.reply())
                                ctx.session.status = states[3] ? states[3] : def_data.define_main_session
                            }
                        } catch {
                            if (states[2].toString().startsWith(def_data.define_inline)) ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.inline())
                            else ctx.reply(states[1] ? states[1] : def_data.def_not_define, faq_keyboard.reply())
                            ctx.session.status = states[3] ? states[3] : def_data.define_main_session
                        }
                    } else {
                        array_num++
                    }

                    if (array_num === ans.length) {
                        ctx.reply(def_data.def_current_session)
                    }
                }
            }
        })
    }

    lunch_bot() {
        try {
            bot.launch()
            console.log(def_data.def_start)
        }
        catch {
            console.log(def_data.def_token)
        }
    }
}
