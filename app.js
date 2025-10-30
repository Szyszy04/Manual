import { drinkGroups } from './drink-map.js';
import { alcoholLibrary } from './spirits.js';
import { drinkLibrary } from './drinks.js';
import {
    bottleLibrary,
    getBottleLibraryCategories,
    getBottlesByCategory
} from './ingredient-library.js';

const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // Stan aplikacji
        const currentScreen = ref('start');

        // Stan dla biblioteki alkoholi
        const selectedLibraryCategory = ref('Tequila');

        // Stan dla biblioteki drinków
        const selectedDrinkCategory = ref('Wódka');
        const expandedDrinks = ref(new Set());

        // Stan dla biblioteki butelek
        const selectedBottleCategory = ref('Wódka');

        // Stan dla mapy drinków
        const selectedMapTab = ref('grupy');
        const selectedGlassType = ref('Nick Nora');
        const selectedAlcoholFilter = ref('Wszystkie');

        // ===== NOWE: Stan dla AFK =====
        const afkSelectedAlcohols = ref(new Set());
        const afkSelectedTime = ref(30);
        const afkIsRunning = ref(false);
        const afkCurrentDrink = ref(null);
        let afkInterval = null;

        // COMPUTED PROPERTIES
        const libraryCategories = computed(() => Object.keys(alcoholLibrary));
        const currentLibraryItems = computed(() => alcoholLibrary[selectedLibraryCategory.value] || []);

        const drinkCategories = computed(() => Object.keys(drinkLibrary));
        const currentDrinkItems = computed(() => drinkLibrary[selectedDrinkCategory.value] || []);

        const bottleLibraryCategories = computed(() => getBottleLibraryCategories());
        const currentBottleLibraryItems = computed(() => getBottlesByCategory(selectedBottleCategory.value));

        // Funkcja kategoryzacji alkoholi
        function categorizeAlcohol(drink) {
            const ingredients = drink.ingredients || [];
            const ingredientsText = ingredients.join(' ').toLowerCase();
            if (ingredientsText.includes('wódka') || ingredientsText.includes('wdka') || ingredientsText.includes('vodka') || ingredientsText.includes('belvedere')) {
                return 'Wódka';
            } else if (ingredientsText.includes('gin') || ingredientsText.includes('bombay') || ingredientsText.includes('fords') || ingredientsText.includes('beefeater')) {
                return 'Gin';
            } else if (ingredientsText.includes('rum') || ingredientsText.includes('bacardi') || ingredientsText.includes('cachaça') || ingredientsText.includes('pisco')) {
                return 'Rum';
            } else if (ingredientsText.includes('tequila')) {
                return 'Tequila';
            } else if (ingredientsText.includes('whisky') || ingredientsText.includes('whiskey') || ingredientsText.includes('bourbon') ||
                ingredientsText.includes('mark') || ingredientsText.includes('jim beam') || ingredientsText.includes('dewar') ||
                ingredientsText.includes('tullamore') || ingredientsText.includes('hennessy')) {
                return 'Whiskey';
            } else if (ingredientsText.includes('martini fiero') || ingredientsText.includes('martini vibrantefloreale') ||
                ingredientsText.includes('gin bezalkoholowy')) {
                return 'Bezalkoholowe';
            } else {
                return 'Inne';
            }
        }

        // Lista rodzajów alkoholu
        const alcoholTypes = computed(() => {
            const types = new Set(['Wszystkie']);
            Object.values(drinkLibrary).forEach(categoryDrinks => {
                categoryDrinks.forEach(drink => {
                    const alcoholType = categorizeAlcohol(drink);
                    types.add(alcoholType);
                });
            });
            return Array.from(types).sort();
        });

        // Computed dla wygodnej listy alkoholi do AFK
        const afkAvailableAlcohols = computed(() => {
            return Array.from(alcoholTypes.value).filter(a => a !== 'Wszystkie');
        });

        // ===== NOWE: Computed dla drinków w AFK puli =====
        const afkAvailableDrinks = computed(() => {
            if (afkSelectedAlcohols.value.size === 0) return [];

            const drinks = [];
            Object.values(drinkLibrary).forEach(categoryDrinks => {
                categoryDrinks.forEach(drink => {
                    const alcoholType = categorizeAlcohol(drink);
                    if (afkSelectedAlcohols.value.has(alcoholType)) {
                        drinks.push(drink);
                    }
                });
            });
            return drinks;
        });

        // Zmodyfikowane computed properties dla szkła
        const glassTypes = computed(() => {
            const types = new Set();
            Object.values(drinkLibrary).forEach(categoryDrinks => {
                categoryDrinks.forEach(drink => {
                    if (drink.glass) {
                        if (selectedAlcoholFilter.value === 'Wszystkie' ||
                            categorizeAlcohol(drink) === selectedAlcoholFilter.value) {
                            types.add(drink.glass);
                        }
                    }
                });
            });

            const typesArray = Array.from(types);
            const glassCountMap = {};
            typesArray.forEach(glassType => {
                glassCountMap[glassType] = 0;
                Object.values(drinkLibrary).forEach(categoryDrinks => {
                    categoryDrinks.forEach(drink => {
                        if (drink.glass === glassType) {
                            if (selectedAlcoholFilter.value === 'Wszystkie' ||
                                categorizeAlcohol(drink) === selectedAlcoholFilter.value) {
                                glassCountMap[glassType]++;
                            }
                        }
                    });
                });
            });

            return typesArray.sort((a, b) => glassCountMap[b] - glassCountMap[a]);
        });

        const drinksByGlass = computed(() => {
            const result = {};
            Object.entries(drinkLibrary).forEach(([category, drinks]) => {
                drinks.forEach(drink => {
                    if (drink.glass) {
                        if (selectedAlcoholFilter.value === 'Wszystkie' ||
                            categorizeAlcohol(drink) === selectedAlcoholFilter.value) {
                            if (!result[drink.glass]) {
                                result[drink.glass] = [];
                            }
                            result[drink.glass].push({
                                name: drink.name,
                                category: category,
                                ingredients: drink.ingredients || [],
                                decoration: drink.decoration || '',
                                alcoholType: categorizeAlcohol(drink)
                            });
                        }
                    }
                });
            });
            return result;
        });

        const currentGlassDrinks = computed(() => {
            return drinksByGlass.value[selectedGlassType.value] || [];
        });

        // FUNKCJE NAWIGACJI
        function goToLibrary() {
            currentScreen.value = 'library';
        }

        function goToDrinkLibrary() {
            currentScreen.value = 'drink-library';
        }

        function goToBottleLibrary() {
            currentScreen.value = 'bottle-library';
        }

        function goToStart() {
            currentScreen.value = 'start';
        }

        function goToDrinkMap() {
            currentScreen.value = 'drink-map';
        }

        // ===== NOWE: Funkcje dla AFK =====
        function goToAFK() {
            currentScreen.value = 'afk';
            afkIsRunning.value = false;
            afkSelectedAlcohols.value = new Set();
            afkCurrentDrink.value = null;
        }

        function afkToggleAlcohol(alcohol) {
            const newSet = new Set(afkSelectedAlcohols.value);
            if (newSet.has(alcohol)) {
                newSet.delete(alcohol);
            } else {
                newSet.add(alcohol);
            }
            afkSelectedAlcohols.value = newSet;
        }

        function afkIsAlcoholSelected(alcohol) {
            return afkSelectedAlcohols.value.has(alcohol);
        }

        function afkGetRandomDrink() {
            if (afkAvailableDrinks.value.length === 0) return null;
            const randomIndex = Math.floor(Math.random() * afkAvailableDrinks.value.length);
            return afkAvailableDrinks.value[randomIndex];
        }

        function afkStart() {
            if (afkSelectedAlcohols.value.size === 0 || afkAvailableDrinks.value.length === 0) {
                alert('Wybierz przynajmniej jeden alkohol!');
                return;
            }

            afkIsRunning.value = true;
            afkCurrentDrink.value = afkGetRandomDrink();

            // Ustaw interval do zmiany drinka
            if (afkInterval) clearInterval(afkInterval);
            afkInterval = setInterval(() => {
                afkCurrentDrink.value = afkGetRandomDrink();
            }, afkSelectedTime.value * 1000);
        }

        function afkStop() {
            afkIsRunning.value = false;
            afkCurrentDrink.value = null;
            if (afkInterval) {
                clearInterval(afkInterval);
                afkInterval = null;
            }
        }

        // Funkcje do wyboru
        function selectLibraryCategory(category) {
            selectedLibraryCategory.value = category;
        }

        function selectDrinkCategory(category) {
            selectedDrinkCategory.value = category;
        }

        function selectBottleCategory(category) {
            selectedBottleCategory.value = category;
        }

        function toggleDrinkExpanded(drinkName) {
            if (expandedDrinks.value.has(drinkName)) {
                expandedDrinks.value.delete(drinkName);
            } else {
                expandedDrinks.value.add(drinkName);
            }
            expandedDrinks.value = new Set(expandedDrinks.value);
        }

        function isDrinkExpanded(drinkName) {
            return expandedDrinks.value.has(drinkName);
        }

        function selectMapTab(tab) {
            selectedMapTab.value = tab;
        }

        function selectGlassType(glassType) {
            selectedGlassType.value = glassType;
        }

        function selectAlcoholFilter(alcoholType) {
            selectedAlcoholFilter.value = alcoholType;
            if (glassTypes.value.length > 0) {
                selectedGlassType.value = glassTypes.value[0];
            }
        }

        // RETURN
        return {
            // Screen management
            currentScreen,
            goToLibrary,
            goToDrinkLibrary,
            goToBottleLibrary,
            goToDrinkMap,
            goToStart,
            goToAFK,

            // Library functionality
            alcoholLibrary,
            selectedLibraryCategory,
            libraryCategories,
            currentLibraryItems,
            selectLibraryCategory,

            // Drink library functionality
            drinkLibrary,
            selectedDrinkCategory,
            drinkCategories,
            currentDrinkItems,
            expandedDrinks,
            selectDrinkCategory,
            toggleDrinkExpanded,
            isDrinkExpanded,

            // Bottle library functionality
            bottleLibrary,
            selectedBottleCategory,
            bottleLibraryCategories,
            currentBottleLibraryItems,
            selectBottleCategory,

            // Drink map functionality
            drinkGroups,
            selectedMapTab,
            selectMapTab,

            // Glass functionality
            glassTypes,
            selectedGlassType,
            selectGlassType,
            drinksByGlass,
            currentGlassDrinks,

            // Alcohol filter functionality
            alcoholTypes,
            selectedAlcoholFilter,
            selectAlcoholFilter,

            // ===== NOWE: AFK functionality =====
            afkSelectedAlcohols,
            afkSelectedTime,
            afkIsRunning,
            afkCurrentDrink,
            afkAvailableAlcohols,
            afkAvailableDrinks,
            afkToggleAlcohol,
            afkIsAlcoholSelected,
            afkStart,
            afkStop,
            afkGetRandomDrink
        };
    }
}).mount('#app');
