const fs = require('fs')
let reply_list = {}
let export_data = {}

function export_all(sec_path) {
    let path = __dirname + './../../../reply/'
    if (sec_path) path = sec_path
    fs.readdirSync(path).forEach(file => {
        if (fs.lstatSync(path + file).isDirectory()) {
            let new_path = path + file + '/'
            export_all(new_path)
        } else {
            if (file.endsWith('.js')) {
                let data = []
                let reply_data = require(path + file)
                for (let key in reply_data) data = reply_data[key]
                reply_list = data
            }
        }
        for (let key in reply_list) export_data = { ...export_data, ...reply_list }
    })
}
export_all()
module.exports.replyes = export_data