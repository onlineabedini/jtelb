// tractive _ test _ bot
// packages
const { Telegraf } = require('telegraf')
const bot = new Telegraf('5304002015:AAH36lJ8ed8mtDw1-PbZCP9N5jk7-B9FZbc')
const { Keyboard } = require('telegram-keyboard')
const LocalSession = require('telegraf-session-local')

bot.use((new LocalSession({ database: 'enomad_db.json' })).middleware())

// modules
const reply = require('./reply.js')
const keyboard_list = require('./keyboard.js')

let ctx_data = require('./ctx_data.js').ctx_data

// start
bot.start((ctx) => {
    const keyboard = Keyboard.make(keyboard_list.main_keyboard);
    ctx.session.username = ctx.message.from.username
    ctx.session.name = ctx.message.from.first_name
    ctx.session.status = "started"

    ctx.reply('Welcome to the bot!', keyboard.reply())
})

// hear and reply
bot.hears(Object.keys(reply.replyes), (ctx) => {
    // * compare way ( recomended )
    let ans = reply.replyes[ctx.match[0]][0]
    array_num = 0
    for (states of ans) {
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


// lunch
bot.launch()