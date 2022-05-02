const fs = require('fs')
let reply_list = {}
let export_data = {}

const directory = './../../../reply/'

function export_all() {
    fs.readdirSync(__dirname + directory).forEach(file => {
        let data = []
        if (!file.startsWith('index')) {
            let reply_data = require(__dirname + directory + file)
            for (let key in reply_data) {
                data = reply_data[key]
            }
            reply_list = data
        }
        for (let key in reply_list) {
            export_data = { ...export_data, ...reply_list }
        }
    })
}
export_all()
module.exports.replyes = export_data