const ctx_data = require('./../ctx_data.js').ctx_data
let data
module.exports = new class main_functions {
    about() {
        data = `
Our company was founded with the idea of bringing innovative software to the masses at affordable prices. In line with this lofty aspiration, we are committed to our mission of ever-improving the digital signage user experience through an automation process to reduce the time and manpower required for managing screens.

We are on the mission to bring ENOMAD to every market in Southeast Asia and to be a dominant force in each market.
        `
        return data
    }

    Enomad() {
        data = `
Our company was founded with the idea of bringing innovative software to the masses at affordable prices. In line with this lofty aspiration, we are committed to our mission of ever-improving the digital signage user experience through an automation process to reduce the time and manpower required for managing screens.

We are on the mission to bring ENOMAD to every market in Southeast Asia and to be a dominant force in each market.
        `
        return data
    }

    advertiser() {
        data = `
        Use Location-Based Advertising option to target specific areas or venues on the map for optimal relevance. It can be one or multiple locations. Using this feature option, the ads will be played only inside the designated place of radar (Geo-Fenced Location).
        `
        return data
    }

    driver() {
        data = `
        We provide free battery and compensate you for installation time. You can earn steady monthly income by just having the screen on. Don’t miss your chance to get your unit as it’s limited stock.
        `
        return data
    }
}