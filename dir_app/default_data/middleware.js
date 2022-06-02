default_data = `
module.exports = new class main_middleware {
    data(ctx) {
        // middleware works if you uncomment this
        // ctx.reply('middleware is working! ' + ctx.from.username) 
    }
    // ---- attention ----
    // for middleware you should always call your own functions in data()
}
`

module.exports = {
    default_data,
}