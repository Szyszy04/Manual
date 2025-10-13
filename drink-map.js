// drink-map.js - Mapa podobieństw między drinkami

// Dane o grupach podobnych drinków z analizy składników
export const drinkGroups = [
    {
        name: "Grupa SOUR",
        icon: "🍋",
        drinks: [
            {
                name: "Vodka Sour",
                commonIngredients: ["25 ml sok z cytryny", "15 ml syrop cukrowy", "20 ml albumina", "1 x dash Angostura Bitters"],
                specificIngredients: ["40 ml Wódka"]
            },
            {
                name: "Whisky Sour", 
                commonIngredients: ["25 ml sok z cytryny", "15 ml syrop cukrowy", "20 ml albumina", "1 x dash Angostura Bitters"],
                specificIngredients: ["40 ml Blended Scotch Whisky"]
            },
            {
                name: "NEW YORK SOUR",
                commonIngredients: ["25 ml sok z cytryny", "15 ml syrop cukrowy", "20 ml albumina", "1 x dash Angostura Bitters"],
                specificIngredients: ["40 ml Bourbon Whiskey", "15 ml Red Wine"]
            },
            {
                name: "Pisco Sour",
                commonIngredients: ["30 ml sok z limonki", "20 ml syrop cukrowy", "20 ml albumina"],
                specificIngredients: ["50 ml Pisco La Caravedo Quebranta", "3 krople Inca Bitters"]
            },
            {
                name: "Amaretto Sour",
                commonIngredients: ["30 ml sok z cytryny", "10 ml syrop cukrowy", "20 ml albumina"],
                specificIngredients: ["10 ml Blended Scotch Whisky", "40 ml Galliano Amaretto"]
            }
        ]
    },
    {
        name: "Grupa NEGRONI",
        icon: "💜",
        drinks: [
            {
                name: "NEGRONI",
                commonIngredients: ["20 ml Martini Bitter", "20 ml Martini Rubino"],
                specificIngredients: ["20 ml London Dry Gin"]
            },
            {
                name: "Boulevardier",
                commonIngredients: ["20 ml Martini Bitter", "20 ml Martini Rubino"],
                specificIngredients: ["30 ml Bourbon Whiskey"]
            },
            {
                name: "Right Hand Cocktail",
                commonIngredients: ["20 ml Martini Bitter", "20 ml Martini Rubino"],
                specificIngredients: ["30 ml Aged Rum", "5 ml Mozart Black Dark Chocolate"]
            }
        ]
    },
    {
        name: "Grupa DAIQUIRI",
        icon: "🏝️",
        drinks: [
            {
                name: "Daiquiri",
                commonIngredients: ["50 ml White Rum", "30 ml Sok z limonki", "20 ml Syrop cukrowy"],
                specificIngredients: []
            },
            {
                name: "Classic Rum Swizzle",
                commonIngredients: ["50 ml White Rum", "30 ml Sok z limonki", "20 ml Syrop cukrowy"],
                specificIngredients: ["4 x dash Angostura Bitters"]
            },
            {
                name: "Hemingway Daiquiri",
                commonIngredients: ["40 ml White Rum", "15 ml Sok z limonki", "10 ml Syrop cukrowy"],
                specificIngredients: ["20 ml Sok grejpfrutowy", "5 ml Maraschino Liqueur"]
            },
            {
                name: "Nuclear  Daiquiri",
                commonIngredients: ["30 ml Overproof White Rum", "20 ml Sok z limonki", "10 ml Syrop cukrowy"],
                specificIngredients: ["20 ml Green Chartreuse", "10 ml Falernum"]
            }
        ]
    },
    {
        name: "Grupa MARGARITA",
        icon: "🌵",
        drinks: [
            {
                name: "TOMMY'S MARGARITA",
                commonIngredients: ["50 ml Tequila", "20 ml Sok z limonki", "20 ml Agave Mix"],
                specificIngredients: []
            },
            {
                name: "LA PALOMA",
                commonIngredients: ["40 ml Tequila", "20 ml Sok z limonki", "20 ml Agave Mix"],
                specificIngredients: ["100 ml Three Cents Grapefruit Soda"]
            },
            {
                name: "margarita",
                commonIngredients: ["40 ml Tequila", "20 ml Sok z limonki"],
                specificIngredients: ["20 ml Cointreau", "kilka kropli Syrop cukrowy"]
            }
        ]
    },
    {
        name: "Grupa MIODOWO-IMBIROWA",
        icon: "🍯",
        drinks: [
            {
                name: "PENICILLIN",
                commonIngredients: ["50 ml Blended Scotch Whisky", "20 ml Syrop miodowo-imbirowy", "20 ml sok z cytryny"],
                specificIngredients: ["Islay Malt Spray"]
            },
            {
                name: "HOT TODDY",
                commonIngredients: ["50 ml Blended Scotch Whisky", "20 ml Syrop miodowo-imbirowy", "20 ml sok z cytryny"],
                specificIngredients: ["Wrzątek", "Laska cynamonu", "plaster cytryn"]
            },
            {
                name: "BEE'S KNEES",
                commonIngredients: ["20 ml Syrop miodowo-imbirowy", "20 ml sok z cytryny"],
                specificIngredients: ["50 ml London Dry Gin", "20 ml sok z pomarańczy"]
            },
            {
                name: "Derby",
                commonIngredients: ["20 ml Syrop miodowo-imbirowy"],
                specificIngredients: ["50 ml Bourbon Whiskey", "30 ml sok grejpfrutowy"]
            }
        ]
    },
    {
        name: "Grupa Peychaud’s Bitters",
        icon: "🗡️",
        drinks: [
            {
                name: "sazerac",
                commonIngredients: ["20 ml Jim Beam Rye", "20 ml Hennessy V.S.", "1 x dash Angostura Bitters", "3 x dash Peychaud’s Bitters"],
                specificIngredients: ["5 ml syrop cukrowy", "Absynth Spray"]
            },
            {
                name: "VIEUX CAREE",
                commonIngredients: ["20 ml Jim Beam Rye", "20 ml Hennessy V.S.", "1 x dash Angostura Bitters", "2 x dash Peychaud’s Bitters"],
                specificIngredients: ["20 ml Martini Rubino", "10 ml D.O.M Benedictine"]
            }
        ]
    },
    {
        name: "Grupa SMASH",
        icon: "🌿",
        drinks: [
            {
                name: "WHISKEY SMASH",
                commonIngredients: ["20 ml syropu cukrowego", "1/2 cytryny", "8 liści mięty"],
                specificIngredients: ["50 ml Maker’s Mark"]
            },
            {
                name: "GIN BASIL SMASH",
                commonIngredients: ["20 ml syrop cukrow", "1/2 cytryny", "8 liści bazylii"],
                specificIngredients: ["50 ml Bombay Sapphire"]
            }
        ]
    }
];

// Funkcje pomocnicze
export function getAllDrinkGroups() {
    return drinkGroups;
}

export function getDrinkGroupByName(groupName) {
    return drinkGroups.find(group => group.name === groupName) || null;
}

export function searchDrinkInGroups(drinkName) {
    for (const group of drinkGroups) {
        const drink = group.drinks.find(d => d.name.toLowerCase() === drinkName.toLowerCase());
        if (drink) {
            return { group: group.name, drink };
        }
    }
    return null;
}

export function getGroupStats() {
    return drinkGroups.map(group => ({
        name: group.name,
        drinkCount: group.drinks.length,
        icon: group.icon
    }));
}
