/*
ATTENTION!!!!
    all data in this example application is static
    please do not make the mistake to use this data everywhere in the code!
    you should use it only in the root component App.js and pass it down to the components that use it

    for a larger application it is important to make a distinction between
       * components that own data
       * visual components
    for a real application the data will probably not be hard-coded but will come from a database or an API call
    we learn that in the 2nd part of this course....
*/

export const PRODUCTS_TOETS_DATA = [
    {name: "cola", price: 1, inStock: 10},
    {name: "water", price: 1, note: "plat of bruisend", inStock: 10},
    {name: "bier", price: 2, size: 25, inStock: 5},
    {name: "bier groot", price: 3, size: 33, inStock: 0},
    {name: "wijn wit", price: 3, inStock: 7},
    {name: "wijn rood", price: 3, inStock: 4},
    {name: "cava", price: 5, inStock: 20},
];


export const PRODUCTS_DATA = [
    {name: "cola", price: 1 },
    {name: "water", price: 1, note: "plat of bruisend"},
    {name: "bier", price: 1, size: 25},
    {name: "bier groot", price: 1, size: 33},
    {name: "wijn", price: 2, note:"rood, wit of rosé"},
    {name: "cava", price: 3},
];


export const NUMBER_DATA = [1, 3, 5, 2, 6, 7, 34, 12, 66, 98, 11, 2];

export const CAR_DATA = [
    {
        id: 1,
        name: "mijn eerste auto",
        brand: "peugeot",
        type: "204",
        color: "blauw",
    },
    {
        id: 2,
        name: "auto van mijn zus",
        brand: "fiat",
        type: "punto",
        color: "geel",
        note: "die ging altijd kapot"
    },
    {id: 3, name: "die van mijn pa", brand: "volvo", color: "zwart"},
    {id: 4, name: "geitje", brand: "citroën",},
    {id: 5, name: "auto1", brand: "Peugeot", type: "505", color: "grijs"},
    {id: 6, name: "auto2", brand: "Fiat", type: "Panda"},
    {id: 7, name: "auto3", brand: "Fiat", type: "Tipo", color: "groen"},
    {id: 8, name: "auto4", brand: "Citroën", type: "C4", color: "rood"},
    {id: 9, name: "auto5", brand: "Fiat", type: "Panda", color: "rood"}
];

export const PERSON_DATA = [
    {id: 1, name: "Jan", age: 18, city: "Mechelen"},
    {id: 2, name: "Marie", age: 25, city: "Katelijne"},
    {id: 3, name: "Anton", age: 16, city: "Duffel"},
    {id: 4, name: "Yves", age: 24, city: "Mechelen"},
    {id: 5, name: "Marijke", age: 16, city: "Duffel"},
    {id: 6, name: "Karel", age: 16, city: "Mechelen"},
    {id: 7, name: "Bart", age: 18, city: "Mechelen"},
    {id: 8, name: "Marijke", age: 28, city: "Lier"},
    {id: 9, name: "Dirk", age: 20, city: "Mechelen"},
    {id: 10, name: "Bavo", age: 20, city: "Lint"},
    {id: 11, name: "Kris", age: 19, city: "Duffel"},
    {id: 12, name: "Leen", age: 21, city: "Katelijne"},
    {id: 13, name: "Lieve", age: 20, city: "Mechelen"},
];

export const WIKI_TEST1_DATA = [
    {
        pageNumber: 1,
        title: "Tips voor het aanleggen van een moestuin",
        text: [
            "Moestuinieren is hip, en wat is er nu leuker dan groenten en fruit eten van eigen kweek? ",
            "De aanleg van een moestuin is niet moeilijk, ook als je geen of weinig ervaring hiermee hebt. Moestuinieren begint met een goede voorbereiding. " ,
            "Het succes van je moestuin heeft alles te maken met de keuze van de plek, de kwaliteit van de grond, de bemesting en het (in)zaaien.",
            "*Is deze basis goed, dan is de helft van het werk al gedaan.*",
            "---",
            "[[zaaien-800x450.jpg"
        ]
    },
    {
        pageNumber: 2,
        title: "Tip 1: Kies de juiste plek",
        text: [
            "Leg je moestuin aan op een plek met zowel zon als schaduw. ",
            "*Maak de ondergrond vlak*, zodat regen- of sproeiwater goed opgenomen kan worden door de planten. ",
            "Is het een winderige plek? Dan is het handig om je moestuin te omheinen met een groene haag. ",
            "Een vak van 1,2 x 1,2 meter is genoeg om mee te beginnen.",
            "[[aardbei5-800x450.jpg"
        ]
    },
    {
        pageNumber: 3,
        title: "Tip 2: Goede grond",
        text: [
            "De *kwaliteit van de grond* is erg belangrijk voor het slagen van de oogst. ",
            "[[Moestuin-800x450.jpg",
            "Bereid de grond, het zaaibed, grondig voor. ",
            "Woel de aarde goed om en verwijder de zo veel mogelijk de oude begroeiing. ",
            "Zorg vooral dat alle ‘onkruidresten’ uit je zaaibed verdwenen zijn. ",
            "De grond mag niet meer bevroren of té vochtig zijn. ",
            "De zaadjes kunnen dan niet goed kiemen. ",
            "Hark de bovenste laag goed los en egaliseer de grond. ",
            "Hoog de plek zo nodig op met tuinaarde.",
            "Zorg dat de bovenste 10 cm van het zaaibed bedekt is met moestuingrond.",
            "[[Zaaien1-800x450.jpg"
        ]
    },
    {
        pageNumber: 4,
        title: "Tip 3: Bemesting",
        text: [
            "Gebruik een *niet te zware bemesting*, daar kunnen _kiemplantjes_ niet goed tegen. ",
            "Een _organische bemesting_ werkt voor een moestuin het beste. ",
            "[[potato-800x450.jpg",
            "Over het _algemeen_ geldt dat hoe *meer* mest, hoe *meer* blad. ",
            "Dat is voor bladgroenten natuurlijk gunstig, maar bijvoorbeeld wortelgroenten geven dan vooral veel loof, en weinig wortel.",
            "Veel groenten houden er wel van om verwend te worden met wat compost."
        ]
    },
    {
        pageNumber: 5,
        title: "Veel plezier met je moestuin!",
        text: [
            "[[Zaaien2-800x450.jpg",
        ]
    },

];
