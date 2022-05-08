default_data = `
module.exports = new class main_middleware {
    constructor() {}
    data(ctx, next) {
        ctx.reply('middleware is working! ' + ctx.from.username) 
        next()
    }
}
`

module.exports = {
    default_data,
}