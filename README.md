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

### Github repository
https://github.com/onlineabedini/jtelb/

### npm
https://www.npmjs.com/package/jtelb

> ### Jtelb advantages 
> - you can have classes of functions that you can use without requiring anywhere
> - you can define each kind of replies list that is based on *sessions*
> - you can define your keyboards very easy and use them without requiring
> - you can define middleware and use them without require
