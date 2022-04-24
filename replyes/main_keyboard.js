const main_functions = require('../functions.js').main_function

module.exports.main_keyboard_replyes = {
    About: [
        [
            ['*', main_functions.about(), 'https://enomad.io/wp-content/uploads/2022/03/Platform-Visual.png'],
        ],
        "about"
    ],
    Enomad: [
        [
            ['*', "Malaysia’s roads have become much brighter.", '', ''],
            ['*', main_functions.Enomad(), 'https://enomad.io/wp-content/uploads/2022/03/Blue-Car-on-the-road-2.jpg', ''],
        ],
        "Enomad"
    ],
    Careers: [
        [
            ['*', "we are intrested to work with advance developer who can be effictive in their work.", '', '', 'career_keyboard'],
        ],
        "careers"
    ],
    Advertiser: [
        [
            ['*', "Location-Based Advertising"],
            ['*', main_functions.advertiser(), "https://enomad.io/wp-content/uploads/2022/03/Enomad-Car-on-map-isometricpng.png"],
        ],
        "advertiser"
    ],
    Driver: [
        [
            ['*', "Earn additional income from your e-hailing car by participating in the ENOMAD Digital LED Car-topper Program. "],
            ['*', main_functions.driver(), "https://enomad.io/wp-content/uploads/2022/04/Enomad-Driver.jpg"],
        ],
        "driver"
    ],
    "Contact us": [
        [
            [
                '*',
                `
                Contact Us page:
                -----------------
                info@enomad.io
                +6019 2333 656

                A-2-28 Jalan PJU 1/43 Aman Suria,
                47301, Petaling Jaya, Selangor,
                Malaysia

                Oasis Square, 06-09, Capital 1, No.2,
                Jalan PJU 1A/7, Ara Damansara
                47301, Petaling Jaya, Selangor,
                Malaysia
                ----------------

                more info 👉🏻 https://enomad.io/contact/
                `
            ],
        ],
        "contact_us"
    ],
    FAQ: [
        [
            ['*', "Frequently Asked Questions", '', '', "faq_keyboard"],
        ],
        "FAQ"
    ],
    Website: [
        [
            [
                '*',
                `
                Visit our web site:
                ------------------
                👉🏻 https://enomad.io/
                ------------------
                Create powerful out-of-home campaigns in Klang Valley with the new intelligent network of Car-top Digital LED Screens.
                `
            ],
        ],
        "website"
    ],
    login: [
        [
            [
                '*',
                `
                Login to enomad:
                👉🏻👉🏻 https://dash.enomad.io/login
                `
            ],
        ],
        "login"
    ],
    back: [
        [
            ['*', 'back to home', '', '', 'main_keyboard'],
        ]
    ]
}