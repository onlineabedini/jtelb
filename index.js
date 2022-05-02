// packages
const { Telegraf } = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const LocalSession = require('telegraf-session-local')
const dir_app = require('./dir_app')


// modules
let reply = ''
let keyboard_list = ''


module.exports = class bot_app {

    define_bot(token, start_message) {
        // config
        this.configure_bot(token)

        // define and build files
        this.bot_directiries_build()

        // start bot and hear
        this.bot_start(start_message)
        this.bot_hears()

        // lunch
        this.lunch_bot()
    }

    configure_bot(token) {
        // define bot
        bot = new Telegraf(token)
        bot.use((new LocalSession({ database: 'irnode_tlb_data_base.json' })).middleware())
    }

    bot_directiries_build() {
        dir_app.build_function()
        dir_app.build_reply()
        dir_app.build_keyboard()
        dir_app.build_src()

        // modules
        reply = require('./data_app/reply')
        keyboard_list = require('./data_app/keyboard')
    }

    bot_start(start_message) {
        // start
        bot.start((ctx) => {
            const keyboard = Keyboard.make(keyboard_list.main_keyboard);
            ctx.session.username = ctx.message.from.username
            ctx.session.name = ctx.message.from.first_name
            ctx.session.status = "started"

            let sr_msg = start_message? start_message : `Hello ${ctx.session.name}! I am irnode_tlb_bot.`
            ctx.reply(sr_msg, keyboard.reply())
        })
    }

    bot_hears() {
        // hear and reply
        bot.hears(Object.keys(reply.replyes), (ctx) => {
            // * compare way ( recomended )
            let ans = reply.replyes[ctx.match[0]][0]
            let array_num = 0
            for (let states of ans) {
                if (states[0] === ctx.session.status || states[0] === '*') {
                    // reply keyboard
                    const faq_keyboard = Keyboard.make(keyboard_list[states[4]] ? keyboard_list[states[4]] : keyboard_list.main_keyboard);

                    // reply content
                    if (states[2] && states[2] !== '') ctx.replyWithPhoto({ url: states[2] }, { "caption": states[1] }, faq_keyboard.reply())
                    else if (states[3]) ctx.replyWithVideo({ source: states[3] }, { "caption": states[1] }, faq_keyboard.reply())
                    else ctx.reply(states[1], faq_keyboard.reply())

                } else {
                    array_num++
                }

                if (array_num === ans.length) {
                    ctx.reply("please complete your current proccess first!")
                }
            }

            // define sessions for user after click
            ctx.session.status = reply.replyes[ctx.match[0]][1] ? reply.replyes[ctx.match[0]][1] : "started"
        })
    }

    lunch_bot() {
        try {
            bot.launch()
            console.log(`
        -----------------------------
        irnode_tlb_bot is lunching...
        -----------------------------
        `)
        }
        catch {
            console.log("Please set your token in the file: index.js")
        }
    }
}
