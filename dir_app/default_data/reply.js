default_data = `
// you can require functions here
module.exports.main_keyboard_replyes = {
    btn1: [
        [
            ['*', "this is btn1 answer!! your bot is working!!", '', '', ''],
        ],
        "btn1"
    ],
}
`

readme_data = `

    definition:
    -> define replyes like the sample:

    module.exports.main_keyboard_replyes = {
        "word that bot hears!": [
            [
                ['*', "answer", 'image_url', 'video_url', 'keyboard_name'],
                ['special_session_for_answer', function_you_defiened(), '', '', ''],
            ],
            "session_name"
        ],
    }

    usage:
    nothing else! XD just enjoy it!

`

module.exports = {
    default_data,
    readme_data,
}