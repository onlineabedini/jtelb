const fs = require('fs')
let keyboard_list = {}
let export_data = {}

function export_all(sec_path) {
    let path = __dirname + './../../../keyboard/'
    if (sec_path) path = sec_path
    fs.readdirSync(path).forEach(file => {
        if (fs.lstatSync(path + file).isDirectory()) {
            let new_path = path + file + '/'
            export_all(new_path)
        } else {
            if (file.endsWith('.js')) {
                let keyboard_data = require(path + file)
                for (let key in keyboard_data) {
                    keyboard_list[key] = keyboard_data[key]
                }
                export_data = { ...export_data, ...keyboard_list }
            }
        }
    })
}
export_all()
module.exports = export_data
