# irnode_tlb

### last update : 
 - Ctx data added for functions
 - Functions added for reply : now you can do everything!
 - Issue fixed
 - picture and video reply deleted from reply array : you can reply in functions now
 - functions require automaticly

## installation
```
-> npm install irnode_tlb
```
for usage follow these steps:
step 1: 
```
const bot = require('irnode_tlb')
bot.define_bot('bot token', 'welcome message ( start message text )')
```
step2:
install nodemon and run it one time
```
-> npm install nodemon -g
```
step3:
```
ignore local session file in package.json
sample ->  "scripts": {
  "start": "nodemon index.js --ignore irnode_tlb_data_base.json"
}
```
start bot again then enjoy.

```
## usage
```
after that, you start one time directories will appear automatically
in that case, you can understand how to use it.
```

### github repository
https://github.com/onlineabedini/irnode_tlb/

### npm
https://www.npmjs.com/package/irnode_tlb
