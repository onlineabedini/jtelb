default_data = `
module.exports = new class main_middleware {
    
    data(ctx, next) {
        // middleware works if you uncomment this
        // ctx.reply('middleware is working! ' + ctx.from.username) 
    }
}
`

module.exports = {
    default_data,
}