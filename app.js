import { vodkas, alcoholLibrary, drinkLibrary, recipes } from './data.js';

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

    // Stan dla biblioteki alkocholi
    const selectedLibraryCategory = ref('Tequila');

    // Stan dla biblioteki drinków
    const selectedDrinkCategory = ref('Wódka');
    const hiddenDrinks = ref(new Set()); // Set nazw drinków które są ukryte

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
    const allIngredientsList = ref([]);
    const showBuilderRecipe = ref(false);

    // Computed properties
    const hasSelectedCategories = computed(() => 
      Object.values(selectedCategories.value).some(Boolean)
    );

    const currentQuestion = computed(() => 
      questions.value[currentQuestionIndex.value] || {}
    );

    const shuffledAnswers = computed(() => {
      if (!currentQuestion.value?.answers) return [];
      return currentQuestion.value.answers;
    });

    const correctAnswerIndex = computed(() => 
      currentQuestion.value?.correctIndex || 0
    );

    const progressWidth = computed(() => 
      `${questions.value.length ? ((currentQuestionIndex.value) / questions.value.length) * 100 : 0}%`
    );

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
      if (currentQuestion.value.type === 'builder') {
        return new Set(recipes[currentQuestion.value.drinkName].map(ing => ing.name));
      }
      return new Set();
    });

    const hasCorrectIngredients = computed(() => {
      const selected = selectedIngredients.value;
      const correct = correctIngredients.value;
      return selected.size === correct.size && 
             Array.from(selected).every(ing => correct.has(ing));
    });

    // Computed dla biblioteki alkocholi
    const libraryCategories = computed(() => Object.keys(alcoholLibrary));
    const currentLibraryItems = computed(() => alcoholLibrary[selectedLibraryCategory.value] || []);

    // Computed dla biblioteki drinków
    const drinkCategories = computed(() => Object.keys(drinkLibrary));
    const currentDrinkItems = computed(() => drinkLibrary[selectedDrinkCategory.value] || []);

    // Funkcje pomocnicze
    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function generateWrongRecipe(correctRecipe) {
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
        recipe.forEach(ingredient => {
          allIngredients.add(ingredient.name);
        });
      });
      return Array.from(allIngredients);
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
      // Force reactivity
      hiddenDrinks.value = new Set(hiddenDrinks.value);
    }

    function isDrinkHidden(drinkName) {
      return hiddenDrinks.value.has(drinkName);
    }

    // Funkcje dla trybu builder
    function createBuilderQuestion() {
      const drinkNames = Object.keys(recipes);
      const randomDrink = drinkNames[Math.floor(Math.random() * drinkNames.length)];
      const allIngredients = shuffleArray(getAllIngredients());

      return {
        type: 'builder',
        drinkName: randomDrink,
        allIngredients: allIngredients,
        correctRecipe: recipes[randomDrink]
      };
    }

    function toggleIngredient(ingredient) {
      if (selectedIngredients.value.has(ingredient)) {
        selectedIngredients.value.delete(ingredient);
      } else {
        selectedIngredients.value.add(ingredient);
      }
      selectedIngredients.value = new Set(selectedIngredients.value);
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
      let isCorrect = true;

      for (let ingredient of correct) {
        const userAmount = parseInt(ingredientAmounts.value[ingredient.name]) || 0;
        if (Math.abs(userAmount - ingredient.amount) > 5) {
          isCorrect = false;
          break;
        }
      }

      if (isCorrect) {
        score.value++;
        nextBuilderQuestion();
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
      showBuilderRecipe.value = false;

      questions.value[currentQuestionIndex.value] = createBuilderQuestion();

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
        if (Math.random() > 0.5) {
          const correct = item.price;
          const wrong = shuffleArray(vodkas.filter(v => v.name !== item.name).map(v => v.price))[0];
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
          const wrong = shuffleArray(vodkas.filter(v => v.ingredient !== correct).map(v => v.ingredient))[0];
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
    }

    // Logika quizu
    function startQuiz() {
      const selectedQuestions = [];

      if (selectedCategories.value.proportions) {
        Object.keys(recipes).forEach(drink => {
          selectedQuestions.push(createQuestion('proportions', drink));
        });
      }

      if (selectedCategories.value.review) {
        Object.keys(recipes).forEach(drink => {
          selectedQuestions.push(createQuestion('review', drink));
        });
      }

      if (selectedCategories.value.vodka) {
        vodkas.forEach(vodka => {
          selectedQuestions.push(createQuestion('vodka', vodka));
        });
      }

      if (selectedCategories.value.builder) {
        for (let i = 0; i < 5; i++) {
          selectedQuestions.push(createQuestion('builder'));
        }
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
      showBuilderRecipe.value = false;
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
      selectedIngredientsCount,
      showBuilderRecipe,
      toggleIngredient,
      checkIngredients,
      checkProportions,
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
      isDrinkHidden
    };
  }
}).mount('#app');
