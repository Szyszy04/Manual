// ingredient-library.js - Biblioteka składników z markami i typami

export const ingredientLibrary = {
    "Whiskey": {
        "Bourbon Whiskey": {
            "manual": ["Maker's Mark", "Jim Beam Black"],
            "inne": ["Angel's Envy", "Bulleit", "Wild Turkey 101", "Woodford Reserve"]
        },
        "Rye Whiskey": {
            "manual": ["Jim Beam Rye"],
            "inne": ["Bulleit 95 Rye", "Woodford Reserve Rye", "Jack Danis Rye"]
        },
        "Irish Whiskey": {
            "manual": ["Tullamore DEW"],
            "inne": ["Jameson"]
        },
        "Blended Scotch Whisky": {
            "manual": ["Dewar’s 8 Caribbean Smooth", "Dewar’s 12 YO"],
            "inne": ["Johnnie Walker", "Monkey Shoulder", "Chivas Regal"]
        }
    },
    "Gin": {
        "London Dry Gin": {
            "manual": ["Bombay Sapphire", "Fords", "Beefeater"],
            "inne": ["Tanqueray"]
        },
        "Old Tom Gin": {
            "manual": ["Hayman's Old Tom"],
            "inne": []
        },
        "Sloe Gin": {
            "manual": ["Hayman’s Sloe Gin"],
            "inne": []
        },
        "Contemporary  Gin": {
            "manual": ["Aster Gin"],
            "inne": ["Hendrick's", "Monkey 47", "Ginsanity", "Gin Mare", "Oxley", "Roku Gin"]
        }
    },
    "Rum": {
        "Aged Rum": {
            "manual": ["Bacardi Carta Oro", "Bacardi 4 Anejo Cuatro", "Bacardi 8 yo"],
            "inne": ["Havana Club Añejo 7 Años", "Dictador", "Santa Teresa 1796"]
        },
        "Spiced Rum": {
            "manual": ["Bacardi Spiced"],
            "inne": ["Union Spice & Sea Salt"]
        },
        "Overproof Rum": {
            "manual": ["Rum Bar White Overproof"],
            "inne": ["Worthy Park"]
        },
        "Jamaican Rum": {
            "manual": ["Smith & Cross"],
            "inne": []
        },
        "Other Rum": {
            "manual": ["Wordl’s End Falernum", "Bank’s"],
            "inne": []
        }
    },
    "Tequila": {
        "Blanco Tequila": {
            "manual": ["Rooster Rojo Blanc"],
            "inne": ["Casamigos Blanco", "Don Julio Blanco", "Patron Silver", "Sierra Antiguo Plata", "Sierra Antiguo Plata"]
        },
        "Reposado Tequila": {
            "manual": ["Rooster Rojo Reposado"],
            "inne": ["Don Julio Reposado", "Herradura Reposado", "Patrón Reposado"]
        },
    },
    "Vodka": {
        "Vodka": {
            "manual": ["Ostoya", "Belvedere"],
            "inne": ["Grey Goose", "Chopin"]
        }
    }
};

// Funkcje pomocnicze dla biblioteki składników
export function getIngredientLibraryCategories() {
    return Object.keys(ingredientLibrary);
}

export function getIngredientsByCategory(category) {
    return ingredientLibrary[category] || {};
}

export function getAllIngredientBrands() {
    const allBrands = [];

    Object.values(ingredientLibrary).forEach(category => {
        Object.values(category).forEach(ingredient => {
            allBrands.push(...ingredient.manual, ...ingredient.inne);
        });
    });

    return [...new Set(allBrands)]; // usuń duplikaty
}

export function searchIngredientBrand(brandName) {
    const results = [];

    Object.entries(ingredientLibrary).forEach(([categoryName, category]) => {
        Object.entries(category).forEach(([ingredientName, ingredient]) => {
            const allBrands = [...ingredient.manual, ...ingredient.inne];
            if (allBrands.some(brand => 
                brand.toLowerCase().includes(brandName.toLowerCase())
            )) {
                results.push({
                    category: categoryName,
                    ingredient: ingredientName,
                    brands: allBrands.filter(brand => 
                        brand.toLowerCase().includes(brandName.toLowerCase())
                    )
                });
            }
        });
    });

    return results;
}

export function getIngredientStats() {
    let totalIngredients = 0;
    let totalBrands = 0;
    let manualBrands = 0;
    let otherBrands = 0;

    Object.values(ingredientLibrary).forEach(category => {
        Object.values(category).forEach(ingredient => {
            totalIngredients++;
            manualBrands += ingredient.manual.length;
            otherBrands += ingredient.inne.length;
            totalBrands += ingredient.manual.length + ingredient.inne.length;
        });
    });

    return {
        totalIngredients,
        totalBrands,
        manualBrands,
        otherBrands
    };
}
