# irnode_tlb

## installation
```bash
-> npm install irnode_tlb
```

## usage ( nodejs )
```bash

for usage follow these steps:

step 1: 

const bot = require('irnode_tlb')
bot.define_bot('bot token', 'welcome message ( start message text )')

step2:

install nodemon and run it one time
-> npm install nodemon -g

step3:
ignore local session file in package.json
sample ->  "scripts": {
  "start": "nodemon index.js --ignore irnode_tlb_data_base.json"
}
start bot again then enjoy.

```
