default_data = `
module.exports = new class main_middleware {
    constructor() {}
    data(ctx, next) {
        ctx.reply('middleware is working! ' + ctx.from.username) 
    }
}
`

module.exports = {
    default_data,
}