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

        // COMPUTED PROPERTIES
        const libraryCategories = computed(() => Object.keys(alcoholLibrary));
        const currentLibraryItems = computed(() => alcoholLibrary[selectedLibraryCategory.value] || []);

        const drinkCategories = computed(() => Object.keys(drinkLibrary));
        const currentDrinkItems = computed(() => drinkLibrary[selectedDrinkCategory.value] || []);

        const bottleLibraryCategories = computed(() => getBottleLibraryCategories());
        const currentBottleLibraryItems = computed(() => getBottlesByCategory(selectedBottleCategory.value));

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
            drinkGroups
        };
    }
}).mount('#app');
