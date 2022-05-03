default_data = `
main_keyboard = [
    ['btn1'],
]

module.exports = {
    main_keyboard,
}
`

readme_data = `

    definition:
    -> define like the default sample

        main_keyboard = [
            ['btn1', 'btn2', 'btn3'],
            ['btn4', 'btn5', 'btn6'],
        ]

    usage:
    -> only use it's name in reply object! nothing else!
    
`

module.exports = {
    default_data,
    readme_data,
}