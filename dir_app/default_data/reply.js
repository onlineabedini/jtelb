default_data = `
// you can require functions here
module.exports.main_keyboard_replyes = {
    "Hello world!": [ ['*', "Hello dear developer! celcome to Jtelb", '', 'said_hello'] ],
    "ُSend several answers": [
         ['*', "this is answer (1)", '', ''], 
         ['*', "this is answer (2)", '', ''], 
         ['*', "this is answer (3)", '', ''], 
    ],
    "Change keyboard": [ ['*', "keyboard changed!!", 'other_keyboard', 'keyboard_changed'] ],
    "Inline keyboard": [ ['*', "inline keyboard is here!", 'inline.other_keyboard', 'inline_key'] ],
    "Answer by function": [ ['*', "fun.sample()", '', 'inline_key'] ],
    // /* or -> */ "Answer by function": [ ['*', "fun.sample", '', 'inline_key'] ],
    "About Jtelb": [ ['*', "fun.jtelb", '', 'inline_key'] ],
    "this is new keyboard!": [ ['keyboard_changed', "click on back", 'other_keyboard', 'keyboard_changed'] ],
    "this is second button": [ ['keyboard_changed', "click on back", 'other_keyboard', 'keyboard_changed'] ],
    "back": [ ['keyboard_changed', "backed to main", 'main_keyboard', 'main'] ],
}
`

module.exports = {
    default_data,
}