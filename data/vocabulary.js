// Vocabulary database organized by level
// Level 1: Foundation (Most Essential 300 Words)
// Level 2: Elementary (+300 Common Words)  
// Level 3: Intermediate (+300 Useful Words)
// Level 4: Advanced (+300 Practical Words)

// TODO: Replace with German vocabulary
// Structure: { id: "unique-id", german: "German word", english: "English translation", type: "noun|verb|adjective|adverb|particle", frequency: 1-4 }

export const vocabularyByLevel = {
  level1: [
    // TODO: Add 300 German words for Level 1
    // Example structure:
    // { id: "sein", german: "sein", english: "to be", type: "verb", frequency: 1 },
    // { id: "haben", german: "haben", english: "to have", type: "verb", frequency: 1 },
    // { id: "wasser", german: "Wasser", english: "water", type: "noun", frequency: 1 },
  ],
  
  level2: [
    // TODO: Add 300 German words for Level 2
  ],
  
  level3: [
    // TODO: Add 300 German words for Level 3
  ],
  
  level4: [
    // TODO: Add 300 German words for Level 4
  ]
};

// Helper function to get all vocabulary items
export function getAllVocabulary() {
  return [
    ...vocabularyByLevel.level1,
    ...vocabularyByLevel.level2,
    ...vocabularyByLevel.level3,
    ...vocabularyByLevel.level4
  ];
}

// Helper function to get vocabulary by ID
export function getVocabularyById(id) {
  const allVocab = getAllVocabulary();
  return allVocab.find(v => v.id === id);
}
