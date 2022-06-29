default_data = `
module.exports = class main_middleware {
    constructor(ctx, next) {
        // middleware works if you uncomment this
        // ctx.reply('middleware is working! ' + ctx.from.username) 
        next();
    }

    // ---- attention ----
    /* 
        for middleware you should always call your own functions in constructor()
        so your functions will be available in your middleware
    */
    // dont forget to use next();
    // you should always use next() 
}
`

module.exports = {
    default_data,
}