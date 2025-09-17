import { 
  vodkas, 
  alcoholLibrary, 
  drinkLibrary, 
  recipes, 
  glassOptions, 
  findDrinkByName, 
  ingredients, 
  getIngredientById, 
  getRecipeWithNames,
  getRecipeWithNamesSimple
} from './index.js';

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

    // Uniwersalny wybór kategorii alkoholi dla wszystkich quizów
    const selectedAlcoholCategories = ref({
      'Wódka': true,
      'Gin': false,
      'Whiskey': false,
      'Rum': false,
      'Tequila': false,
      'Bezalkoholowe': false
    });

    // Stan dla biblioteki alkoholi
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

    // Stan dla trybu builder
    const builderStep = ref(1);
    const selectedIngredients = ref(new Set());
    const ingredientAmounts = ref({});
    const selectedGlass = ref('');
    const allIngredientsList = ref([]);
    const showBuilderRecipe = ref(false);
    const showDecorationSuccess = ref(false);

    // FUNKCJE POMOCNICZE

    // Funkcja do pobierania wszystkich unikalnych składników
    function getAllIngredients() {
      return ingredients.map(ingredient => ingredient.name);
    }

    // Funkcja do generowania niepoprawnej receptury
    function generateWrongRecipe(drinkName) {
      const recipeWithNames = getRecipeWithNamesSimple(drinkName); // Użyj wersji bez miar!
      if (!Array.isArray(recipeWithNames)) return [];

      return recipeWithNames.map(ingredient => ({
        name: ingredient.name,
        amount: Math.max(5, ingredient.amount + (Math.random() > 0.5 ? 
          (Math.random() > 0.5 ? 5 : 10) : 
          (Math.random() > 0.5 ? -5 : -10)
        ))
      }));
    }

    function shuffleArray(array) {
      if (!Array.isArray(array)) return [];
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    // COMPUTED PROPERTIES
    const hasSelectedAlcoholCategories = computed(() =>
      Object.values(selectedAlcoholCategories.value).some(Boolean)
    );

    const selectedAlcoholCategoriesList = computed(() =>
      Object.keys(selectedAlcoholCategories.value).filter(category =>
        selectedAlcoholCategories.value[category]
      )
    );

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

    const showRecipe = computed(() => {
      return currentQuestion.value.type === 'review' && answerSelected.value;
    });

    const currentRecipe = computed(() => {
      if (currentQuestion.value.type === 'review' && currentQuestion.value.drinkName) {
        return getRecipeWithNamesSimple(currentQuestion.value.drinkName); // Bez miar dla review
      }
      return [];
    });

    // POPRAWKA - Computed property dla przepisu builderu z nazwami składników + miarami
    const builderCorrectRecipeWithNames = computed(() => {
      if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
        return getRecipeWithNames(currentQuestion.value.drinkName); // Z miarami dla buildera
      }
      return [];
    });

    const selectedIngredientsCount = computed(() => selectedIngredients.value.size);

    // POPRAWKA - correctIngredients bez miar, żeby pasowały do selectedIngredients
    const correctIngredients = computed(() => {
      if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
        const recipe = getRecipeWithNamesSimple(currentQuestion.value.drinkName); // BEZ MIAR!
        if (recipe && Array.isArray(recipe)) {
          return new Set(recipe.map(ing => ing.name));
        }
      }
      return new Set();
    });

    const hasCorrectIngredients = computed(() => {
      const selected = selectedIngredients.value;
      const correct = correctIngredients.value;
      if (!selected || !correct) return false;
      return selected.size === correct.size &&
        Array.from(selected).every(ing => correct.has(ing));
    });

    const correctGlass = computed(() => {
      if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
        const drink = findDrinkByName(currentQuestion.value.drinkName);
        return drink?.glass || '';
      }
      return '';
    });

    const hasCorrectGlass = computed(() => {
      return selectedGlass.value === correctGlass.value;
    });

    const libraryCategories = computed(() => Object.keys(alcoholLibrary));
    const currentLibraryItems = computed(() => alcoholLibrary[selectedLibraryCategory.value] || []);

    const drinkCategories = computed(() => Object.keys(drinkLibrary));
    const currentDrinkItems = computed(() => drinkLibrary[selectedDrinkCategory.value] || []);

    const shuffledGlassOptions = computed(() => {
      if (currentQuestion.value.type === 'builder' && currentQuestion.value.allGlasses) {
        return currentQuestion.value.allGlasses;
      }
      return [];
    });

    function getDrinksFromSelectedCategories() {
      const availableDrinks = [];
      selectedAlcoholCategoriesList.value.forEach(category => {
        if (drinkLibrary[category]) {
          drinkLibrary[category].forEach(drink => {
            if (recipes[drink.name]) {
              availableDrinks.push(drink.name);
            }
          });
        }
      });
      return availableDrinks;
    }

    function createBuilderQuestion() {
      const availableDrinks = getDrinksFromSelectedCategories();
      if (availableDrinks.length === 0) return null;

      const randomDrink = availableDrinks[Math.floor(Math.random() * availableDrinks.length)];
      const allIngredients = shuffleArray(getAllIngredients());
      const allGlasses = shuffleArray([...glassOptions]);
      const drinkInfo = findDrinkByName(randomDrink);

      return {
        type: 'builder',
        drinkName: randomDrink,
        allIngredients: allIngredients,
        allGlasses: allGlasses,
        correctRecipe: recipes[randomDrink],
        correctGlass: drinkInfo?.glass || '',
        decoration: drinkInfo?.decoration || ''
      };
    }

    function createQuestion(type, item) {
      if (type === 'proportions') {
        const correctRecipe = recipes[item];
        if (!correctRecipe) return null;

        const correctRecipeWithNames = getRecipeWithNamesSimple(item); // BEZ MIAR dla proporcji!
        const wrongRecipes = [
          generateWrongRecipe(item),
          generateWrongRecipe(item),
          generateWrongRecipe(item)
        ];

        const allAnswers = [correctRecipeWithNames, ...wrongRecipes].sort(() => 0.5 - Math.random());

        return {
          type: 'proportions',
          correct: item,
          answers: allAnswers,
          correctIndex: allAnswers.indexOf(correctRecipeWithNames)
        };
      } else if (type === 'review') {
        const drinkRecipe = getRecipeWithNamesSimple(item); // BEZ MIAR
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

    // FUNKCJE NAWIGACJI
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

    function toggleAlcoholCategory(category) {
      selectedAlcoholCategories.value[category] = !selectedAlcoholCategories.value[category];
    }

    // FUNKCJE BUILDER
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
        const correctRecipe = getRecipeWithNamesSimple(currentQuestion.value.drinkName); // BEZ MIAR
        correctRecipe.forEach(ing => {
          ingredientAmounts.value[ing.name] = '';
        });
      } else {
        showBuilderRecipe.value = true;
        setTimeout(() => {
          nextBuilderQuestion();
        }, 3000);
      }
    }

    function checkProportions() {
      const correct = getRecipeWithNamesSimple(currentQuestion.value.drinkName); // BEZ MIAR
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

    // GŁÓWNE FUNKCJE QUIZ
    function startQuiz() {
      if (!hasSelectedAlcoholCategories.value) {
        alert('Wybierz przynajmniej jedną kategorię alkoholu!');
        return;
      }

      const selectedQuestions = [];
      const availableDrinks = getDrinksFromSelectedCategories();

      if (selectedCategories.value.proportions) {
        availableDrinks.forEach(drink => {
          const question = createQuestion('proportions', drink);
          if (question) selectedQuestions.push(question);
        });
      }

      if (selectedCategories.value.review) {
        availableDrinks.forEach(drink => {
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
        for (let i = 0; i < 5; i++) {
          const question = createQuestion('builder');
          if (question) selectedQuestions.push(question);
        }
      }

      if (selectedQuestions.length === 0) {
        alert('Nie udało się utworzyć żadnych pytań dla wybranych kategorii.');
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

    // RETURN
    return {
      // Screen management
      currentScreen,
      goToLibrary,
      goToDrinkLibrary,
      goToStart,

      // Categories and selection
      selectedCategories,
      selectedAlcoholCategories,
      hasSelectedCategories,
      hasSelectedAlcoholCategories,
      selectedAlcoholCategoriesList,
      toggleAlcoholCategory,

      // Quiz state
      questions,
      currentQuestion,
      currentQuestionIndex,
      shuffledAnswers,
      correctAnswerIndex,
      answerSelected,
      selectedAnswer,
      score,
      progressWidth,
      imageLoadError,

      // Quiz functions
      startQuiz,
      answerQuestion,
      getAnswerClass,
      nextQuestion,
      restartQuiz,

      // Recipe display
      showRecipe,
      currentRecipe,
      recipes,
      getRecipeWithNames,

      // Builder functionality - WSZYSTKIE COMPUTED MUSZĄ BYĆ TUTAJ!
      builderStep,
      selectedIngredients,
      selectedIngredientsCount,
      ingredientAmounts,
      selectedGlass,
      showBuilderRecipe,
      showDecorationSuccess,
      shuffledGlassOptions,
      correctIngredients,
      hasCorrectIngredients,
      correctGlass,
      hasCorrectGlass,
      builderCorrectRecipeWithNames,  // Z miarami dla buildera
      toggleIngredient,
      selectGlass,
      checkIngredients,
      checkProportions,
      checkGlass,

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

      // Other
      glassOptions
    };
  }
}).mount('#app');
