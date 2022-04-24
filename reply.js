// reply list
const words = require('./replyes/words.js').words_replyes
const careers = require('./replyes/careers.js').careers_replyes
const faq_replyes = require('./replyes/faq.js').faq_replyes
const main_keyboard = require('./replyes/main_keyboard.js').main_keyboard_replyes

module.exports.replyes = {  ...words, ...main_keyboard, ...careers, ...faq_replyes }