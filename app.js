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
        const hiddenDrinks = ref(new Set());

        // Stan dla biblioteki butelek (dawniej składników)
        const selectedBottleCategory = ref('Wódka');

        // Stan dla mapy drinków - nowa funkcjonalność
        const selectedMapTab = ref('grupy'); // domyślna zakładka
        const selectedGlassType = ref('Nick Nora'); // domyślny typ szkła

        // NOWE: Stan dla filtrowania szkła po alkoholu
        const selectedAlcoholFilter = ref('Wszystkie'); // nowy filtr alkoholu

        // COMPUTED PROPERTIES
        const libraryCategories = computed(() => Object.keys(alcoholLibrary));
        const currentLibraryItems = computed(() => alcoholLibrary[selectedLibraryCategory.value] || []);

        const drinkCategories = computed(() => Object.keys(drinkLibrary));
        const currentDrinkItems = computed(() => drinkLibrary[selectedDrinkCategory.value] || []);

        const bottleLibraryCategories = computed(() => getBottleLibraryCategories());
        const currentBottleLibraryItems = computed(() => getBottlesByCategory(selectedBottleCategory.value));

        // Funkcja pomocnicza do kategoryzacji alkoholi w drinkach
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

        // Zmodyfikowane computed properties dla szkła z sortowaniem i filtrowaniem
        const glassTypes = computed(() => {
            const types = new Set();
            Object.values(drinkLibrary).forEach(categoryDrinks => {
                categoryDrinks.forEach(drink => {
                    if (drink.glass) {
                        // Filtruj po alkoholu jeśli wybrano konkretny
                        if (selectedAlcoholFilter.value === 'Wszystkie' || 
                            categorizeAlcohol(drink) === selectedAlcoholFilter.value) {
                            types.add(drink.glass);
                        }
                    }
                });
            });

            // Sortowanie szkła według liczby wystąpień (malejąco)
            const typesArray = Array.from(types);
            const glassCountMap = {};

            typesArray.forEach(glassType => {
                glassCountMap[glassType] = 0;
                Object.values(drinkLibrary).forEach(categoryDrinks => {
                    categoryDrinks.forEach(drink => {
                        if (drink.glass === glassType) {
                            // Sprawdź czy drink pasuje do filtru alkoholowego
                            if (selectedAlcoholFilter.value === 'Wszystkie' || 
                                categorizeAlcohol(drink) === selectedAlcoholFilter.value) {
                                glassCountMap[glassType]++;
                            }
                        }
                    });
                });
            });

            // Sortuj według liczby wystąpień (malejąco)
            return typesArray.sort((a, b) => glassCountMap[b] - glassCountMap[a]);
        });

        const drinksByGlass = computed(() => {
            const result = {};
            Object.entries(drinkLibrary).forEach(([category, drinks]) => {
                drinks.forEach(drink => {
                    if (drink.glass) {
                        // Filtruj po alkoholu jeśli wybrano konkretny
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

        function selectLibraryCategory(category) {
            selectedLibraryCategory.value = category;
        }

        function selectDrinkCategory(category) {
            selectedDrinkCategory.value = category;
        }

        function selectBottleCategory(category) {
            selectedBottleCategory.value = category;
        }

        function toggleDrinkVisibility(drinkName) {
            if (hiddenDrinks.value.has(drinkName)) {
                hiddenDrinks.value.delete(drinkName);
            } else {
                hiddenDrinks.value.add(drinkName);
            }
            hiddenDrinks.value = new Set(hiddenDrinks.value);
        }

        function isDrinkHidden(drinkName) {
            return hiddenDrinks.value.has(drinkName);
        }

        function goToDrinkMap() {
            currentScreen.value = 'drink-map';
        }

        // Nowe funkcje dla mapy drinków
        function selectMapTab(tab) {
            selectedMapTab.value = tab;
        }

        function selectGlassType(glassType) {
            selectedGlassType.value = glassType;
        }

        // NOWA: Funkcja dla wyboru filtru alkoholu
        function selectAlcoholFilter(alcoholType) {
            selectedAlcoholFilter.value = alcoholType;
            // Resetuj wybrane szkło do pierwszego dostępnego po filtrowaniu
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
            hiddenDrinks,
            selectDrinkCategory,
            toggleDrinkVisibility,
            isDrinkHidden,

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

            // NOWE: Alcohol filter functionality
            alcoholTypes,
            selectedAlcoholFilter,
            selectAlcoholFilter
        };
    }
}).mount('#app');
