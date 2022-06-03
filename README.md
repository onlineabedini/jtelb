# Jtelb

**Jtelb**  is a special telegram bot framework based on telegrafjs that makes some stuff auto and close to web Node js project structure.

## Installation
```
npm install jtelb
```
## Usage
**require jtelb**
```
const bot = require('jtelb')
bot.define_bot('put your bot token here')
bot.define_bot('put your bot token here', 'put your welcome message here')
```

**if you are using nodemon**

**ignore local session file**

*jtelb_data.json should ignore if you are using nodemon*

add  --ignore jtelb_data.json  for start command like this:
```
"start": "nodemon index.js --ignore jtelb_data.json",
```

*start bot*
**start bot to generate directories for you => npm start => folders will generate automaticly for you**


**/bot_app**

* all the folders and files will generate inside /bot_app and your bot application is here 
it's because that you can add telegram bot to your nodejs web application



**/functions**

* you can define your functions and functions directory so you can use them in replies
```
module.exports = new class sample_function {
    sample(ctx) {
        ctx.reply('this is functions answer!!')
    }
    
    answer_me(){
        ctx.reply('this is your answer')
    }
}
```

**/keyboard**

* you can define your both simple keyboards and inline keyboards in a same way in  this file like this sample
* => after define you have to export that
```
main_keyboard = [
    ['Hello world!'],
    ['ُSend several answers'],
    ['Change keyboard', 'Inline keyboard'],
    ['Answer by function'],
    ['About Jtelb'],
]
```


**/middleware**

* you can define your middlewares here 
* for middleware you should always call your own functions in data()
```
module.exports = new class main_middleware {
    data(ctx) {
        ctx.reply('middleware is working! ' + ctx.from.username) 
    }
}
```

**/reply**

* in reply directory you can define answers, a way of sending answers, sessions conditions and session that you want define after answer
* look at this following example:
```
module.exports.main_keyboard_replyes = {
    "this is waht user write or enter in bot": [ 
        [
          'this is session that you want to check if is true then answer',
          "Hello dear developer! welcome to Jtelb", /* you can put fun. before that and call your function */
          'this is keyboard name',  /* you can put inline. before that to make it inline keyboard */
          'this is session that you want define after answer' /* it can be anything you like */
        ] 
    ],
}
```




### Github repository
https://github.com/onlineabedini/jtelb/

### npm
https://www.npmjs.com/package/jtelb

> ### Jtelb advantages 
> - you can have classes of functions that you can use without requiring anywhere
> - you can define each kind of replies list that is based on *sessions*
> - you can define your keyboards very easy and use them without requiring
> - you can define middleware and use them without require
