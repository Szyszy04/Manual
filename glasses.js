// glasses.js - Definicje szklanek i opcji podawania

// Opcje szklanek dostępnych w aplikacji
export const glassOptions = [
  "Collins",
  "Nick & Nora", 
  "Double Old Fashioned Glass",
  "Coupe + kieliszek do wódki",
  "Old Fashioned",
  "Coupe",
  "Champagne Flute", 
  "Irish Coffee Cup",
  "Whisky Glass",
  "Copa Bombay",
  "Copa Martini",
  "Mini Coupette",
  "Swizzle Glass",
  "Hot Toddy Cup",
  "Szkło do koniaku - snifter"
];

// Funkcje pomocnicze do pracy ze szklankami
export function getGlassById(glassName) {
  return glassOptions.find(glass => glass === glassName);
}

export function getAllGlasses() {
  return [...glassOptions];
}

export function searchGlasses(searchTerm) {
  return glassOptions.filter(glass => 
    glass.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Mapowanie szklanek na kategorie (opcjonalne dla przyszłych funkcji)
export const glassCategories = {
  "Koktajlowe": ["Nick & Nora", "Coupe", "Mini Coupette"],
  "Wysokie": ["Collins", "Champagne Flute", "Swizzle Glass"],
  "Niskie": ["Old Fashioned", "Double Old Fashioned Glass", "Whisky Glass"],
  "Specjalne": ["Irish Coffee Cup", "Hot Toddy Cup", "Szkło do koniaku - snifter"],
  "Copa": ["Copa Bombay", "Copa Martini"],
  "Kombinowane": ["Coupe + kieliszek do wódki"]
};
