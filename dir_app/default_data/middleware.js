default_data = `
module.exports = new class main_middleware {
    constructor() {}
    data(ctx) {
        ctx.reply('middleware is working! ' + ctx.from.username) 
    }
}
`

module.exports = {
    default_data,
}