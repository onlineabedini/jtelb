default_data = `

function sample_middleware(ctx, next) {   
    // middleware works if you uncomment this
    // ctx.reply('middleware is working! ' + ctx.from.username) 
    next()
}

/* 
    ---- attention ---------------------------------------------
    - you should export each function that you define in object
    - dont forget to use next();
*/

module.exports = {
    sample_middleware,
}

`

module.exports = {
    default_data,
}