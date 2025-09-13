import { vodkas, alcoholLibrary, drinkLibrary, recipes, glassOptions, drinkDetails } from './data.js';

const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // Stan aplikacji
        const currentScreen = ref('start');
        const selectedCategories = ref({
            proportions: true,
            review: false,
            vodka: false,
            builder: false
        });

        // Stan dla wyboru alkoholi w konstruktorze
        const selectedBuilderAlcohols = ref({
            'Wódka': false,
            'Whiskey': false,
            'Rum': false,
            'Gin': false,
            'Tequila': false
        });

        // Stan dla biblioteki alkocholi
        const selectedLibraryCategory = ref('Tequila');

        // Stan dla biblioteki drinków
        const selectedDrinkCategory = ref('Wódka');
        const hiddenDrinks = ref(new Set());

        const questions = ref([]);
        const currentQuestionIndex = ref(0);
        const score = ref(0);
        const answerSelected = ref(false);
        const selectedAnswer = ref(null);
        const imageLoadError = ref(false);

        // Stan dla trybu builder - ROZSZERZONY
        const builderStep = ref(1);
        const selectedIngredients = ref(new Set());
        const ingredientAmounts = ref({});
        const selectedGlass = ref('');
        const allIngredientsList = ref([]);
        const showBuilderRecipe = ref(false);
        const showDecorationSuccess = ref(false);

        // NOWY: Computed dla wybranych alkoholi w konstruktorze
        const hasSelectedBuilderAlcohols = computed(() =>
            Object.values(selectedBuilderAlcohols.value).some(Boolean)
        );

        const builderAlcoholList = computed(() => 
            Object.keys(selectedBuilderAlcohols.value).filter(alcohol => 
                selectedBuilderAlcohols.value[alcohol]
            )
        );

        // Computed properties z walidacją
        const hasSelectedCategories = computed(() =>
            Object.values(selectedCategories.value).some(Boolean)
        );

        const currentQuestion = computed(() => {
            if (!questions.value || questions.value.length === 0) return {};
            if (currentQuestionIndex.value < 0 || currentQuestionIndex.value >= questions.value.length) return {};
            return questions.value[currentQuestionIndex.value] || {};
        });

        const shuffledAnswers = computed(() => {
            if (!currentQuestion.value?.answers) return [];
            return currentQuestion.value.answers;
        });

        const correctAnswerIndex = computed(() =>
            currentQuestion.value?.correctIndex || 0
        );

        const progressWidth = computed(() => {
            if (!questions.value || questions.value.length === 0) return '0%';
            return `${((currentQuestionIndex.value || 0) / questions.value.length) * 100}%`;
        });

        // Wyświetlanie przepisu po odpowiedzi w trybie review
        const showRecipe = computed(() => {
            return currentQuestion.value.type === 'review' && answerSelected.value;
        });

        const currentRecipe = computed(() => {
            if (currentQuestion.value.type === 'review' && currentQuestion.value.drinkName) {
                return recipes[currentQuestion.value.drinkName] || [];
            }
            return [];
        });

        // Computed dla trybu builder
        const selectedIngredientsCount = computed(() => selectedIngredients.value.size);

        const correctIngredients = computed(() => {
            if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
                const recipe = recipes[currentQuestion.value.drinkName];
                if (recipe) {
                    return new Set(recipe.map(ing => ing.name));
                }
            }
            return new Set();
        });

        const hasCorrectIngredients = computed(() => {
            const selected = selectedIngredients.value;
            const correct = correctIngredients.value;
            return selected.size === correct.size &&
                Array.from(selected).every(ing => correct.has(ing));
        });

        // Computed dla szkła
        const correctGlass = computed(() => {
            if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
                return drinkDetails[currentQuestion.value.drinkName]?.glass || '';
            }
            return '';
        });

        const hasCorrectGlass = computed(() => {
            return selectedGlass.value === correctGlass.value;
        });

        // Computed dla biblioteki alkocholi
        const libraryCategories = computed(() => Object.keys(alcoholLibrary));
        const currentLibraryItems = computed(() => alcoholLibrary[selectedLibraryCategory.value] || []);

        // Computed dla biblioteki drinków
        const drinkCategories = computed(() => Object.keys(drinkLibrary));
        const currentDrinkItems = computed(() => drinkLibrary[selectedDrinkCategory.value] || []);

        // Shuffled glass options dla konstruktora
        const shuffledGlassOptions = computed(() => {
            if (currentQuestion.value.type === 'builder' && currentQuestion.value.allGlasses) {
                return currentQuestion.value.allGlasses;
            }
            return [];
        });

        // Funkcje pomocnicze
        function shuffleArray(array) {
            if (!Array.isArray(array)) return [];
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function generateWrongRecipe(correctRecipe) {
            if (!Array.isArray(correctRecipe)) return [];
            return correctRecipe.map(ingredient => ({
                name: ingredient.name,
                amount: Math.max(5, ingredient.amount + (Math.random() > 0.5 ?
                    (Math.random() > 0.5 ? 5 : 10) :
                    (Math.random() > 0.5 ? -5 : -10)
                ))
            }));
        }

        function getAllIngredients() {
            const allIngredients = new Set();
            Object.values(recipes).forEach(recipe => {
                if (Array.isArray(recipe)) {
                    recipe.forEach(ingredient => {
                        if (ingredient && ingredient.name) {
                            allIngredients.add(ingredient.name);
                        }
                    });
                }
            });
            return Array.from(allIngredients);
        }

        // NOWA: Funkcja do pobierania drinków z wybranych alkoholi
        function getDrinksFromSelectedAlcohols() {
            const availableDrinks = [];
            builderAlcoholList.value.forEach(alcohol => {
                if (drinkLibrary[alcohol]) {
                    drinkLibrary[alcohol].forEach(drink => {
                        if (recipes[drink.name]) {
                            availableDrinks.push(drink.name);
                        }
                    });
                }
            });
            return availableDrinks;
        }

        // Funkcje nawigacji
        function goToLibrary() {
            currentScreen.value = 'library';
        }

        function goToDrinkLibrary() {
            currentScreen.value = 'drink-library';
        }

        function goToStart() {
            currentScreen.value = 'start';
            resetBuilderState();
        }

        function selectLibraryCategory(category) {
            selectedLibraryCategory.value = category;
        }

        // Funkcje dla biblioteki drinków
        function selectDrinkCategory(category) {
            selectedDrinkCategory.value = category;
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

        // NOWA: Funkcja toggle dla alkoholi w konstruktorze
        function toggleBuilderAlcohol(alcohol) {
            selectedBuilderAlcohols.value[alcohol] = !selectedBuilderAlcohols.value[alcohol];
        }

        // ZAKTUALIZOWANA: Funkcja tworzenia pytania builder z filtrowaniem alkoholi
        function createBuilderQuestion() {
            const availableDrinks = getDrinksFromSelectedAlcohols();
            if (availableDrinks.length === 0) return null;

            const randomDrink = availableDrinks[Math.floor(Math.random() * availableDrinks.length)];
            const allIngredients = shuffleArray(getAllIngredients());
            const allGlasses = shuffleArray([...glassOptions]);

            return {
                type: 'builder',
                drinkName: randomDrink,
                allIngredients: allIngredients,
                allGlasses: allGlasses,
                correctRecipe: recipes[randomDrink],
                correctGlass: drinkDetails[randomDrink]?.glass || '',
                decoration: drinkDetails[randomDrink]?.decoration || ''
            };
        }

        // Funkcje dla trybu builder
        function toggleIngredient(ingredient) {
            if (!ingredient) return;
            if (selectedIngredients.value.has(ingredient)) {
                selectedIngredients.value.delete(ingredient);
            } else {
                selectedIngredients.value.add(ingredient);
            }
            selectedIngredients.value = new Set(selectedIngredients.value);
        }

        function selectGlass(glass) {
            selectedGlass.value = glass;
        }

        function checkIngredients() {
            if (hasCorrectIngredients.value) {
                builderStep.value = 2;
                ingredientAmounts.value = {};
                Array.from(selectedIngredients.value).forEach(ing => {
                    ingredientAmounts.value[ing] = '';
                });
            } else {
                showBuilderRecipe.value = true;
                setTimeout(() => {
                    nextBuilderQuestion();
                }, 3000);
            }
        }

        function checkProportions() {
            const correct = recipes[currentQuestion.value.drinkName];
            if (!correct) return;
            let isCorrect = true;
            for (let ingredient of correct) {
                const userAmount = parseInt(ingredientAmounts.value[ingredient.name]) || 0;
                if (Math.abs(userAmount - ingredient.amount) > 5) {
                    isCorrect = false;
                    break;
                }
            }
            if (isCorrect) {
                builderStep.value = 3;
                selectedGlass.value = '';
            } else {
                showBuilderRecipe.value = true;
                setTimeout(() => {
                    nextBuilderQuestion();
                }, 3000);
            }
        }

        function checkGlass() {
            if (hasCorrectGlass.value) {
                score.value++;
                showDecorationSuccess.value = true;
                setTimeout(() => {
                    nextBuilderQuestion();
                }, 3000);
            } else {
                showBuilderRecipe.value = true;
                setTimeout(() => {
                    nextBuilderQuestion();
                }, 3000);
            }
        }

        function nextBuilderQuestion() {
            builderStep.value = 1;
            selectedIngredients.value = new Set();
            ingredientAmounts.value = {};
            selectedGlass.value = '';
            showBuilderRecipe.value = false;
            showDecorationSuccess.value = false;
            const newQuestion = createBuilderQuestion();
            if (newQuestion) {
                questions.value[currentQuestionIndex.value] = newQuestion;
            }
            if (currentQuestionIndex.value < questions.value.length - 1) {
                currentQuestionIndex.value++;
                resetState();
            } else {
                currentScreen.value = 'result';
            }
        }

        function createQuestion(type, item) {
            if (type === 'proportions') {
                const correctRecipe = recipes[item];
                if (!correctRecipe) return null;
                const wrongRecipes = [
                    generateWrongRecipe(correctRecipe),
                    generateWrongRecipe(correctRecipe),
                    generateWrongRecipe(correctRecipe)
                ];
                const allAnswers = [correctRecipe, ...wrongRecipes].sort(() => 0.5 - Math.random());
                return {
                    type: 'proportions',
                    correct: item,
                    answers: allAnswers,
                    correctIndex: allAnswers.indexOf(correctRecipe)
                };
            } else if (type === 'review') {
                const drinkRecipe = recipes[item];
                if (!drinkRecipe) return null;
                const allIngredients = getAllIngredients();
                const isTrue = Math.random() > 0.5;
                let ingredient;
                if (isTrue) {
                    const x = Math.floor(Math.random() * drinkRecipe.length);
                    ingredient = drinkRecipe[x].name;
                } else {
                    const ingredientsNotInDrink = allIngredients.filter(ing =>
                        !drinkRecipe.some(recipeIng => recipeIng.name === ing)
                    );
                    if (ingredientsNotInDrink.length === 0) return null;
                    ingredient = ingredientsNotInDrink[Math.floor(Math.random() * ingredientsNotInDrink.length)];
                }
                const questionText = `Czy ${ingredient} jest składnikiem drinka ${item}?`;
                return {
                    type: 'review',
                    correct: isTrue,
                    question: questionText,
                    drinkName: item,
                    answers: ['TAK', 'NIE'],
                    correctIndex: isTrue ? 0 : 1
                };
            } else if (type === 'vodka') {
                if (!item) return null;
                if (Math.random() > 0.5) {
                    const correct = item.price;
                    const availableVodkas = vodkas.filter(v => v.name !== item.name && v.price);
                    if (availableVodkas.length === 0) return null;
                    const wrong = shuffleArray(availableVodkas.map(v => v.price))[0];
                    const options = shuffleArray([correct, wrong]);
                    return {
                        type: 'vodka',
                        subType: 'price',
                        question: `Ile kosztuje shota wódki "${item.name}"?`,
                        answers: options.map(price => price + " zł"),
                        correctIndex: options.indexOf(correct)
                    };
                } else {
                    const correct = item.ingredient;
                    const availableVodkas = vodkas.filter(v => v.ingredient !== correct && v.ingredient);
                    if (availableVodkas.length === 0) return null;
                    const wrong = shuffleArray(availableVodkas.map(v => v.ingredient))[0];
                    const options = shuffleArray([correct, wrong]);
                    return {
                        type: 'vodka',
                        subType: 'ingredient',
                        question: `Jaki jest surowiec wódki "${item.name}"?`,
                        answers: options,
                        correctIndex: options.indexOf(correct)
                    };
                }
            } else if (type === 'builder') {
                return createBuilderQuestion();
            }
            return null;
        }

        // ZAKTUALIZOWANA: Logika quizu z walidacją alkoholi dla konstruktora
        function startQuiz() {
            const selectedQuestions = [];

            if (selectedCategories.value.proportions) {
                Object.keys(recipes).forEach(drink => {
                    const question = createQuestion('proportions', drink);
                    if (question) selectedQuestions.push(question);
                });
            }

            if (selectedCategories.value.review) {
                Object.keys(recipes).forEach(drink => {
                    const question = createQuestion('review', drink);
                    if (question) selectedQuestions.push(question);
                });
            }

            if (selectedCategories.value.vodka) {
                vodkas.forEach(vodka => {
                    const question = createQuestion('vodka', vodka);
                    if (question) selectedQuestions.push(question);
                });
            }

            if (selectedCategories.value.builder) {
                if (!hasSelectedBuilderAlcohols.value) {
                    alert('Wybierz przynajmniej jeden alkohol dla konstruktora!');
                    return;
                }
                for (let i = 0; i < 5; i++) {
                    const question = createQuestion('builder');
                    if (question) selectedQuestions.push(question);
                }
            }

            if (selectedQuestions.length === 0) {
                console.warn('Nie udało się utworzyć żadnych pytań');
                return;
            }

            questions.value = shuffleArray(selectedQuestions);
            currentQuestionIndex.value = 0;
            score.value = 0;
            resetState();
            resetBuilderState();
            currentScreen.value = 'quiz';
        }

        function resetState() {
            answerSelected.value = false;
            selectedAnswer.value = null;
            imageLoadError.value = false;
        }

        function resetBuilderState() {
            builderStep.value = 1;
            selectedIngredients.value = new Set();
            ingredientAmounts.value = {};
            selectedGlass.value = '';
            showBuilderRecipe.value = false;
            showDecorationSuccess.value = false;
        }

        function answerQuestion(idx) {
            if (answerSelected.value) return;
            answerSelected.value = true;
            selectedAnswer.value = idx;
            if (idx === correctAnswerIndex.value) {
                score.value++;
            }
            setTimeout(nextQuestion, 2000);
        }

        function getAnswerClass(idx) {
            if (!answerSelected.value) return '';
            if (idx === correctAnswerIndex.value) return 'correct';
            if (idx === selectedAnswer.value) return 'wrong';
            return '';
        }

        function nextQuestion() {
            if (currentQuestionIndex.value < questions.value.length - 1) {
                currentQuestionIndex.value++;
                resetState();
                resetBuilderState();
            } else {
                currentScreen.value = 'result';
            }
        }

        function restartQuiz() {
            currentScreen.value = 'start';
            resetBuilderState();
            resetState();
        }

        return {
            currentScreen,
            selectedCategories,
            hasSelectedCategories,
            startQuiz,
            questions,
            currentQuestion,
            shuffledAnswers,
            correctAnswerIndex,
            answerSelected,
            selectedAnswer,
            score,
            progressWidth,
            imageLoadError,
            answerQuestion,
            getAnswerClass,
            restartQuiz,
            showRecipe,
            currentRecipe,
            recipes,
            // Builder functions
            builderStep,
            selectedIngredients,
            ingredientAmounts,
            selectedGlass,
            selectedIngredientsCount,
            showBuilderRecipe,
            showDecorationSuccess,
            shuffledGlassOptions,
            toggleIngredient,
            selectGlass,
            checkIngredients,
            checkProportions,
            checkGlass,
            // Library functions
            alcoholLibrary,
            selectedLibraryCategory,
            libraryCategories,
            currentLibraryItems,
            goToLibrary,
            goToStart,
            selectLibraryCategory,
            // Drink library functions
            drinkLibrary,
            selectedDrinkCategory,
            drinkCategories,
            currentDrinkItems,
            hiddenDrinks,
            goToDrinkLibrary,
            selectDrinkCategory,
            toggleDrinkVisibility,
            isDrinkHidden,
            // Eksportujemy currentQuestionIndex
            currentQuestionIndex,
            // Glass i decoration details
            glassOptions,
            drinkDetails,
            // NOWE: Builder alcohol selection
            selectedBuilderAlcohols,
            hasSelectedBuilderAlcohols,
            builderAlcoholList,
            toggleBuilderAlcohol
        };
    }
}).mount('#app');
