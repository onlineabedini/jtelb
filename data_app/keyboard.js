const fs = require('fs')
let keyboard_list = {}
let export_data = {}

const directory = './../../../keyboard/'

function export_all(){
    fs.readdirSync(__dirname + directory).forEach(file => {
        if (!file.startsWith('index')) {
            let keyboard_data = require(__dirname + directory + file)
            for (let key in keyboard_data) {
                keyboard_list[key] = keyboard_data[key]
            }
            export_data = {...export_data,...keyboard_list}
        }
    })
}
export_all()
module.exports = export_data
