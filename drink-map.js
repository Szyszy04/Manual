// drink-map.js - Mapa podobieństw między drinkami
// Dane o grupach podobnych drinków z analizy składników

export const drinkGroups = {
    "SOUR": {
        name: "Grupa SOUR",
        description: "Drinki z bazą cytryna + syrop + albumina",
        icon: "🍋",
        pattern: ["sok z cytryny", "syrop cukrowy", "albumina"],
        drinks: [
            {
                name: "Vodka Sour",
                similarity: 1.0,
                commonIngredients: ["sok z cytryny", "syrop cukrowy", "albumina", "Angostura Bitters"],
                uniqueIngredients: ["Wódka"],
                recipe: [
                    "40 ml Wódka",
                    "25 ml soku z cytryny", 
                    "15 ml syropu cukrowego",
                    "20 ml Albumina",
                    "1 x dash Angostura Bitters"
                ]
            },
            {
                name: "Whisky Sour",
                similarity: 0.95,
                commonIngredients: ["sok z cytryny", "syrop cukrowy", "albumina", "Angostura Bitters"],
                uniqueIngredients: ["Blended Scotch Whisky"],
                recipe: [
                    "40 ml Blended Scotch Whisky",
                    "25 ml soku z cytryny",
                    "15 ml syropu cukrowego", 
                    "20 ml Albumina",
                    "1 x dash Angostura Bitters"
                ]
            },
            {
                name: "NEW YORK SOUR",
                similarity: 0.85,
                commonIngredients: ["sok z cytryny", "syrop cukrowy", "albumina", "Angostura Bitters"],
                uniqueIngredients: ["Bourbon Whiskey", "Red Wine"],
                recipe: [
                    "40 ml Bourbon Whiskey",
                    "25 ml soku z cytryny",
                    "15 ml syropu cukrowego",
                    "20 ml albumina",
                    "1 x dash Angostura Bitters",
                    "15 ml Red Wine"
                ]
            },
            {
                name: "Amaretto Sour",
                similarity: 0.80,
                commonIngredients: ["sok z cytryny", "syrop cukrowy", "albumina"],
                uniqueIngredients: ["Blended Scotch Whisky", "Galliano Amaretto"],
                recipe: [
                    "40 ml Galliano Amaretto",
                    "10 ml Blended Scotch Whisky",
                    "30 ml soku z cytryny",
                    "10 ml syropu cukrowego",
                    "20 ml Albumina"
                ]
            }
        ]
    },
    
    "NEGRONI": {
        name: "Grupa NEGRONI",
        description: "Drinki z bazą bitter + słodki wermouth",
        icon: "🍷",
        pattern: ["Martini Bitter", "Martini Rubino"],
        drinks: [
            {
                name: "NEGRONI",
                similarity: 1.0,
                commonIngredients: ["Martini Bitter", "Martini Rubino"],
                uniqueIngredients: ["London Dry Gin"],
                recipe: [
                    "20 ml London Dry Gin",
                    "20 ml Martini Rubino",
                    "20 ml Martini Bitter"
                ]
            },
            {
                name: "Boulevardier",
                similarity: 0.95,
                commonIngredients: ["Martini Bitter", "Martini Rubino"],
                uniqueIngredients: ["Bourbon Whiskey"],
                recipe: [
                    "30 ml Bourbon Whiskey",
                    "20 ml Martini Bitter",
                    "20 ml Martini Rubino"
                ]
            },
            {
                name: "Right Hand Cocktail",
                similarity: 0.85,
                commonIngredients: ["Martini Bitter", "Martini Rubino"],
                uniqueIngredients: ["Aged Rum", "Mozart Black Dark Chocolate"],
                recipe: [
                    "30 ml Aged Rum",
                    "20 ml Martini Bitter",
                    "20 ml Martini Rubino",
                    "5 ml Mozart Black Dark Chocolate"
                ]
            }
        ]
    },

    "DAIQUIRI": {
        name: "Grupa DAIQUIRI",
        description: "Drinki z bazą rum + limonka",
        icon: "🏝️",
        pattern: ["rum", "sok z limonki"],
        drinks: [
            {
                name: "Daiquiri",
                similarity: 1.0,
                commonIngredients: ["White Rum", "Sok z limonki", "Syrop cukrowy"],
                uniqueIngredients: [],
                recipe: [
                    "50 ml White Rum",
                    "20 ml Soku z limonki",
                    "10 ml Syrop cukrowy"
                ]
            },
            {
                name: "Caipirinha", 
                similarity: 0.98,
                commonIngredients: ["rum", "sok z limonki", "syrop cukrowy"],
                uniqueIngredients: ["Cachaça"],
                recipe: [
                    "50 ml Cachaça",
                    "15 ml Syrop cukrowy",
                    "2 ćwiartki limonki"
                ]
            },
            {
                name: "Classic Rum Swizzle",
                similarity: 0.90,
                commonIngredients: ["White Rum", "Sok z limonki", "Syrop cukrowy"],
                uniqueIngredients: ["Angostura Bitters"],
                recipe: [
                    "50 ml White Rum",
                    "30 ml Soku z limonki",
                    "20 ml Syrop cukrowy",
                    "4 x dash Angostura Bitters"
                ]
            },
            {
                name: "Hemingway Daiquiri",
                similarity: 0.75,
                commonIngredients: ["White Rum", "Sok z limonki", "Syrop cukrowy"],
                uniqueIngredients: ["Sok grejpfrutowy", "Maraschino"],
                recipe: [
                    "40 ml White Rum",
                    "20 ml Sok grejpfrutowy",
                    "15 ml Soku z limonki",
                    "10 ml Syrop cukrowy",
                    "5 ml Maraschino Liqueur"
                ]
            },
            {
                name: "Nuclear Daiquiri",
                similarity: 0.70,
                commonIngredients: ["rum", "Sok z limonki", "Syrop cukrowy"],
                uniqueIngredients: ["Overproof White Rum", "Green Chartreuse", "Falernum"],
                recipe: [
                    "30 ml Overproof White Rum",
                    "20 ml Green Chartreuse",
                    "10 ml Falernum",
                    "20 ml Sok z limonki",
                    "10 ml Syrop cukrowy"
                ]
            }
        ]
    },

    "MARGARITA": {
        name: "Grupa MARGARITA",
        description: "Drinki z bazą tequila + limonka",
        icon: "🌵",
        pattern: ["Tequila", "Sok z limonki"],
        drinks: [
            {
                name: "TOMMY'S MARGARITA",
                similarity: 1.0,
                commonIngredients: ["Tequila", "Sok z limonki", "Agave Mix"],
                uniqueIngredients: [],
                recipe: [
                    "50 ml Tequila",
                    "20 ml Agave Mix",
                    "20 ml Soku z limonki"
                ]
            },
            {
                name: "LA PALOMA",
                similarity: 0.95,
                commonIngredients: ["Tequila", "Sok z limonki", "Agave Mix"],
                uniqueIngredients: ["Three Cents Grapefruit Soda"],
                recipe: [
                    "40 ml Tequila",
                    "20 ml Agave Mix",
                    "20 ml Soku z limonki",
                    "100 ml Three Cents Grapefruit Soda"
                ]
            },
            {
                name: "margarita",
                similarity: 0.80,
                commonIngredients: ["Tequila", "Sok z limonki"],
                uniqueIngredients: ["Cointreau", "Syrop cukrowy"],
                recipe: [
                    "40 ml Tequila",
                    "20 ml Cointreau",
                    "20 ml Soku z limonki",
                    "kilka kropli syropu cukrowego"
                ]
            }
        ]
    },

    "MIODOWO_IMBIROWA": {
        name: "Grupa MIODOWO-IMBIROWA",
        description: "Drinki z syropem miodowo-imbirowym",
        icon: "🍯",
        pattern: ["Syrop miodowo-imbirowy"],
        drinks: [
            {
                name: "PENICILLIN",
                similarity: 1.0,
                commonIngredients: ["Blended Scotch Whisky", "Syrop miodowo-imbirowy", "sok z cytryny"],
                uniqueIngredients: ["Islay Malt Spray"],
                recipe: [
                    "50 ml Blended Scotch Whisky",
                    "20 ml syrop miodowo-imbirowy",
                    "20 ml soku z cytryny",
                    "Islay Malt Spray"
                ]
            },
            {
                name: "HOT TODDY",
                similarity: 0.90,
                commonIngredients: ["Blended Scotch Whisky", "Syrop miodowo-imbirowy", "sok z cytryny"],
                uniqueIngredients: ["Wrzątek", "Laska cynamonu", "plaster cytryn"],
                recipe: [
                    "50 ml Blended Scotch Whisky",
                    "20 ml Syrop miodowo-imbirowy",
                    "20 ml sok z cytryny",
                    "Wrzątek",
                    "Laska cynamonu",
                    "plaster cytryn"
                ]
            },
            {
                name: "BEE'S KNEES",
                similarity: 0.70,
                commonIngredients: ["Syrop miodowo-imbirowy", "sok z cytryny"],
                uniqueIngredients: ["London Dry Gin", "sok z pomarańczy"],
                recipe: [
                    "50 ml London Dry Gin",
                    "20 ml Syrop miodowo-imbirowy",
                    "20 ml soku z cytryny",
                    "20 ml soku z pomarańczy"
                ]
            },
            {
                name: "Derby",
                similarity: 0.65,
                commonIngredients: ["Syrop miodowo-imbirowy"],
                uniqueIngredients: ["Bourbon Whiskey", "sok grejpfrutowy"],
                recipe: [
                    "50 ml Bourbon Whiskey",
                    "30 ml soku grejpfrutowego",
                    "20 ml Syrop miodowo-imbirowy"
                ]
            }
        ]
    },

    "MOJITO": {
        name: "Grupa MOJITO",
        description: "Drinki z miętą i rumem",
        icon: "🌿",
        pattern: ["rum", "mięta"],
        drinks: [
            {
                name: "Mojito",
                similarity: 1.0,
                commonIngredients: ["Aged Rum", "limonka", "Syrop miętowy", "liście mięty", "Woda gazowana"],
                uniqueIngredients: [],
                recipe: [
                    "50 ml Aged Rum",
                    "1/2 limonki",
                    "15 ml Syrop miętowy",
                    "8 liści mięty",
                    "Woda gazowana"
                ]
            },
            {
                name: "Mojito Norblito",
                similarity: 0.85,
                commonIngredients: ["rum", "Syrop miętowy", "liście mięty"],
                uniqueIngredients: ["White Rum", "Fake Lime Juice"],
                recipe: [
                    "50 ml White Rum",
                    "30 ml Fake Lime Juice",
                    "20 ml Syrop miętowy",
                    "5 liści mięty"
                ]
            },
            {
                name: "Old Cuban",
                similarity: 0.70,
                commonIngredients: ["rum", "limonka", "liście mięty"],
                uniqueIngredients: ["Aged Rum", "Syrop waniliowy", "Angostura Bitters", "Prosecco"],
                recipe: [
                    "50 ml Aged Rum",
                    "20 ml Syrop waniliowy",
                    "20 ml Sok z limonki",
                    "1 x dash Angostura Bitters",
                    "40 ml Prosecco",
                    "5 liści mięty"
                ]
            }
        ]
    }
};

// Funkcje pomocnicze do pracy z mapą drinków
export function getAllDrinkGroups() {
    return Object.keys(drinkGroups);
}

export function getDrinkGroupByName(groupName) {
    return drinkGroups[groupName] || null;
}

export function searchDrinkInGroups(drinkName) {
    for (const [groupKey, group] of Object.entries(drinkGroups)) {
        const drink = group.drinks.find(d => d.name.toLowerCase() === drinkName.toLowerCase());
        if (drink) {
            return { group: groupKey, drink };
        }
    }
    return null;
}

export function getSimilarDrinks(drinkName, threshold = 0.7) {
    const result = [];
    for (const [groupKey, group] of Object.entries(drinkGroups)) {
        const targetDrink = group.drinks.find(d => d.name.toLowerCase() === drinkName.toLowerCase());
        if (targetDrink) {
            const similarDrinks = group.drinks.filter(d => 
                d.name !== drinkName && d.similarity >= threshold
            );
            result.push(...similarDrinks.map(d => ({...d, group: group.name})));
        }
    }
    return result.sort((a, b) => b.similarity - a.similarity);
}

export function getGroupStats() {
    const stats = {};
    for (const [key, group] of Object.entries(drinkGroups)) {
        stats[key] = {
            name: group.name,
            drinkCount: group.drinks.length,
            avgSimilarity: group.drinks.reduce((sum, d) => sum + d.similarity, 0) / group.drinks.length,
            patternSize: group.pattern.length
        };
    }
    return stats;
}
