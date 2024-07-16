const json_menu = [{
        "name": "1. Home",
        "menu": [{
            "name": "1.1. history",
            "menu": [{
                "name": "1.2. history"
            }]
        }]
    },
    {
        "name": "2. Our product",
        "menu": [{
            "name": "2.1. sport car",
            "menu": [{
                    "name": "2.1.1. Lamborghini"
                },
                {
                    "name": "2.1.2. mustang"
                }
            ]
        }]
    },
    {
        "name": "3. contact us"
    }
];
console.log(json_menu[0].menu[0].name);
console.log(json_menu[1].menu[0].menu[1].name);
console.log(json_menu[2].name);