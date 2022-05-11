default_data = `
module.exports = new class sample_function {
    sample(ctx) {
        ctx.reply('this is functions answer!!')
    }

    jtelb(ctx) {
        ctx.reply(
        ` + '`' +
        `
Jtelb is a special telegram bot framework based on telegrafjs that makes some stuff auto and close to web Node js project structure.

auto generate basic bot
for start developing using Jtelb you only have to require it and pass a token, then automatically bot directories will deploy, and with samples, you can learn how to use it.
basic bot after deployment is ready to use
auto require
you can have classes of functions that you can use without requiring anywhere
you can define each kind of replies list that is based on sessions
you can define your keyboards very easy and use them without requiring
you can define middleware and use them without require.
        `
        + '`' + `)
    }
}
`

module.exports = {
    default_data,
}