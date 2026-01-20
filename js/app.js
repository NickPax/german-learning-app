// Core application logic
import { topics } from '../data/topics.js';
import { exercises } from '../data/exercises.js';
import { 
    renderLevelSelection, 
    renderTopicSelection, 
    renderMissingWordExercise, 
    renderTTsExercise,
    addNavigation,
    updateProgress,
    showFeedback,
    finishTopic,
    scrollToNextButton,
    applyTheme,
    randomizeOptions,
    shuffleArray,
    generateTranslation
} from './ui.js';

// App state
let currentTopic = null;
let currentExercise = 0;
let points = 0;
let userAnswers = [];
let isDarkMode = localStorage.getItem('darkMode') === 'true';
let topicBestScores = JSON.parse(localStorage.getItem('jetztDeutschBestScores')) || {};
let currentSetIndex = null;
let selectedLevel = 1; // Default to level 1
let topicSetHistory = JSON.parse(localStorage.getItem('jetztDeutschSetHistory')) || {};
let currentExercises = [];

// DOM elements
const levelSelectionScreen = document.getElementById('level-selection-screen');
const topicSelectionScreen = document.getElementById('topic-selection-screen');
const exerciseContainer = document.getElementById('exercise-container');
const progressContainer = document.getElementById('progress-container');
const progressFill = document.getElementById('progress-fill');
const pointsDisplay = document.getElementById('points');
const completionScreen = document.getElementById('completion-screen');
const finalScore = document.getElementById('final-score');
const completionMessage = document.getElementById('completion-message');
const themeToggle = document.getElementById('theme-toggle');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileChangeLevelBtn = document.getElementById('mobile-change-level-btn');
const mobileResetProgressBtn = document.getElementById('mobile-reset-progress-btn');
const newTopicBtn = document.getElementById('new-topic-btn');
const restartTopicBtn = document.getElementById('restart-topic-btn');
const backToLevelsBtn = document.getElementById('back-to-levels-btn');
const resetProgressBtn = document.getElementById('reset-progress-btn');

// Initialize theme
applyTheme(isDarkMode);

// Theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        applyTheme(isDarkMode);
        
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        }
    });
}

// Mobile hamburger menu (for theme toggle on small screens)
function closeMobileMenu() {
    if (!mobileMenu || !hamburgerBtn) return;
    mobileMenu.classList.add('hidden');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}
function toggleMobileMenu() {
    if (!mobileMenu || !hamburgerBtn) return;
    const willOpen = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    hamburgerBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

    // Keep menu actions sensible based on current screen
    if (willOpen) {
        if (mobileChangeLevelBtn && levelSelectionScreen) {
            mobileChangeLevelBtn.disabled = !levelSelectionScreen.classList.contains('hidden');
        }
    }
}
if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });
    mobileMenu.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('click', closeMobileMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
}

// Mobile menu actions
if (mobileChangeLevelBtn) {
    mobileChangeLevelBtn.addEventListener('click', () => {
        closeMobileMenu();
        showLevelSelection();
    });
}
if (mobileResetProgressBtn) {
    mobileResetProgressBtn.addEventListener('click', () => {
        closeMobileMenu();
        resetProgress();
    });
}

// Select a random set that hasn't been used recently
function selectRandomSet(topicKey) {
    const topicExercises = exercises[topicKey];
    if (!topicExercises || !topicExercises.sets) return 0;
    
    // Initialize history if needed
    if (!topicSetHistory[topicKey]) {
        topicSetHistory[topicKey] = [];
    }
    
    const numSets = topicExercises.sets.length;
    
    // Get available sets (not in last 2 used)
    const availableSets = [];
    for (let i = 0; i < numSets; i++) {
        if (!topicSetHistory[topicKey].slice(-2).includes(i)) {
            availableSets.push(i);
        }
    }
    
    // If all sets were recently used, reset history
    if (availableSets.length === 0) {
        topicSetHistory[topicKey] = [];
        for (let i = 0; i < numSets; i++) {
            availableSets.push(i);
        }
    }
    
    // Select random from available
    const randomIndex = availableSets[Math.floor(Math.random() * availableSets.length)];
    
    // Update history
    topicSetHistory[topicKey].push(randomIndex);
    localStorage.setItem('jetztDeutschSetHistory', JSON.stringify(topicSetHistory));
    
    return randomIndex;
}

// Filter exercises by level
function filterExercisesByLevel(exercises) {
    return exercises.filter(exercise => exercise.level <= selectedLevel);
}

// Start topic exercises
function startTopicExercises(topicKey) {
    if (topicSelectionScreen) topicSelectionScreen.classList.add('hidden');
    if (progressContainer) progressContainer.classList.remove('hidden');
    if (exerciseContainer) exerciseContainer.classList.remove('hidden');
    if (completionScreen) completionScreen.classList.add('hidden');
    
    currentTopic = topicKey;
    currentExercise = 0;
    points = 0;
    userAnswers = [];
    
    // Get exercises from all sets and filter by level
    const topicExercises = exercises[topicKey];
    if (!topicExercises || !topicExercises.sets) return;
    
    const allSets = topicExercises.sets;
    
    // Collect all exercises from all sets at the selected level
    const allExercisesAtLevel = [];
    allSets.forEach((set) => {
        const filtered = filterExercisesByLevel(set);
        allExercisesAtLevel.push(...filtered);
    });
    
    // Shuffle all exercises to ensure variety
    currentExercises = shuffleArray(allExercisesAtLevel);
    
    // Limit to maximum 5 exercises (randomly selected after shuffle)
    currentExercises = currentExercises.slice(0, 5);
    
    // Reset user answers for the new set
    userAnswers = new Array(currentExercises.length).fill(null);
    
    if (pointsDisplay) pointsDisplay.textContent = points;
    updateProgress(currentExercise, currentExercises.length, progressFill, document.getElementById('progress-text'));
    loadExercise();
}

// Load and display current exercise
function loadExercise() {
    const topicData = topics[currentTopic];
    const exercise = currentExercises[currentExercise];
    
    if (!exercise || !exerciseContainer) {
        if (exerciseContainer) {
            exerciseContainer.innerHTML = `
                <div class="exercise-content" style="text-align: center;">
                    <h3>No exercises available at your current level</h3>
                    <p>Try selecting a higher vocabulary level or a different topic.</p>
                    <button class="btn btn-next" onclick="showTopicSelection()" style="margin-top: 20px;">
                        Back to Topics
                    </button>
                </div>
            `;
        }
        return;
    }
    
    exerciseContainer.innerHTML = '';
    
    const titleContainer = document.createElement('div');
    titleContainer.className = 'exercise-title';
    titleContainer.innerHTML = `
        <span><i class="fas fa-${exercise.type === 'missing-word' ? 'puzzle-piece' : 'headphones'}"></i> ${exercise.type === 'missing-word' ? 'Fill in the Blank' : 'Listen & Identify Topic'}</span>
        <div>
            <span class="topic-name">${topicData.name}</span>
            <span class="level-badge" style="font-size: 0.8rem; margin-right: 10px;">Level ${selectedLevel}</span>
            <button class="back-btn" id="back-to-topics-btn">
                <i class="fas fa-arrow-left"></i> Topics
            </button>
        </div>
    `;
    exerciseContainer.appendChild(titleContainer);
    
    setTimeout(() => {
        const backBtn = document.getElementById('back-to-topics-btn');
        if (backBtn) {
            backBtn.addEventListener('click', showTopicSelection);
        }
    }, 0);
    
    // Store randomized options on the exercise object
    if (exercise.type === 'missing-word') {
        if (!exercise.currentOptions) {
            const randomized = randomizeOptions(exercise.options, exercise.correct);
            exercise.currentOptions = randomized.options;
            exercise.currentCorrect = randomized.correctIndex;
        }
    }
    
    if (exercise.type === 'tts') {
        if (!exercise.currentTopics) {
            const topics = [...exercise.topics];
            const correctIndices = Array.isArray(exercise.correct) ? exercise.correct : [exercise.correct];
            const correctTopics = correctIndices
                .map((i) => topics[i])
                .filter((t) => typeof t === 'string');
            const shuffledTopics = shuffleArray(topics);
            const newCorrectIndices = correctTopics
                .map((t) => shuffledTopics.indexOf(t))
                .filter((i) => i >= 0);
            
            exercise.currentTopics = shuffledTopics;
            // Back-compat: some UI paths still expect a single index
            exercise.currentCorrect = newCorrectIndices[0] ?? 0;
            exercise.currentCorrectSet = newCorrectIndices.length ? newCorrectIndices : [exercise.currentCorrect];
        }
    }
    
    let content;
    if (exercise.type === 'missing-word') {
        content = renderMissingWordExercise(exercise, currentExercise, userAnswers, (index, correctIndex, ex) => {
            handleMissingWordAnswer(index, correctIndex, ex);
        });
    } else if (exercise.type === 'tts') {
        content = renderTTsExercise(exercise, currentExercise, userAnswers, (index, correctIndex, ex) => {
            handleTTSAnswer(index, correctIndex, ex);
        });
    }
    
    if (content) {
        exerciseContainer.appendChild(content);
    }
    
    const nav = addNavigation(
        currentExercise, 
        currentExercises.length, 
        userAnswers,
        () => {
            if (currentExercise > 0) {
                currentExercise--;
                // Reset randomized options for new exercise
                if (currentExercises[currentExercise]) {
                    delete currentExercises[currentExercise].currentOptions;
                    delete currentExercises[currentExercise].currentTopics;
                    delete currentExercises[currentExercise].currentCorrect;
                }
                loadExercise();
                updateProgress(currentExercise, currentExercises.length, progressFill, document.getElementById('progress-text'));
            }
        },
        () => {
            if (currentExercise < currentExercises.length - 1) {
                currentExercise++;
                // Reset randomized options for new exercise
                if (currentExercises[currentExercise]) {
                    delete currentExercises[currentExercise].currentOptions;
                    delete currentExercises[currentExercise].currentTopics;
                    delete currentExercises[currentExercise].currentCorrect;
                }
                loadExercise();
                updateProgress(currentExercise, currentExercises.length, progressFill, document.getElementById('progress-text'));
            } else {
                finishTopicScreen();
            }
        }
    );
    exerciseContainer.appendChild(nav);
    
    // Scroll to show the exercise content and navigation buttons when loading the first exercise
    // Use setTimeout to ensure DOM is fully rendered before scrolling
    if (currentExercise === 0) {
        setTimeout(() => {
            // Scroll to the navigation buttons at the bottom to ensure they're visible
            const navElement = exerciseContainer.querySelector('.exercise-navigation');
            if (navElement) {
                navElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else if (exerciseContainer) {
                // Fallback: scroll to exercise container
                exerciseContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
}

// Handle missing word answer
function handleMissingWordAnswer(selectedIndex, correctIndex, exercise) {
    userAnswers[currentExercise] = selectedIndex;
    
    if (selectedIndex === correctIndex) {
        points += 10;
        if (pointsDisplay) pointsDisplay.textContent = points;
    }
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === selectedIndex) {
            btn.classList.add('selected');
            if (index === correctIndex) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
            }
        } else if (index === correctIndex) {
            btn.classList.add('correct');
        }
    });
    
    showFeedback(selectedIndex === correctIndex, exercise.explanation, exercise, true);
    
    // Show translation after answer
    const translationDisplay = document.getElementById('translation-display');
    if (translationDisplay) {
        // Generate translation with correct answer filled in
        const correctAnswer = exercise.options[exercise.correct];
        const fullSentence = exercise.sentence.replace('___', correctAnswer);
        const exerciseWithAnswer = { ...exercise, sentence: fullSentence };
        translationDisplay.textContent = generateTranslation(exerciseWithAnswer);
        translationDisplay.style.display = 'block';
    }
    
    // Enable the Next button - use ID for reliable selection
    const enableNextButton = () => {
        const nextBtn = document.getElementById('exercise-next-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
            return nextBtn;
        }
        return null;
    };
    
    // Try immediately
    let nextBtn = enableNextButton();
    
    // Also try after a short delay to ensure DOM is ready
    if (!nextBtn) {
        setTimeout(() => {
            nextBtn = enableNextButton();
            if (nextBtn) {
                scrollToNextButton(nextBtn);
            }
        }, 100);
    } else {
        scrollToNextButton(nextBtn);
    }
}

// Handle TTS answer
function handleTTSAnswer(selectedIndex, correctIndex, exercise) {
    userAnswers[currentExercise] = selectedIndex;
    
    const correctSet = exercise.currentCorrectSet || (correctIndex !== undefined ? [correctIndex] : []);
    const isCorrect = correctSet.includes(selectedIndex);
    
    if (isCorrect) {
        points += 10;
        if (pointsDisplay) pointsDisplay.textContent = points;
    }
    
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.classList.add('locked');
        if (index === selectedIndex) {
            card.classList.add('selected');
        }
        if (correctSet.includes(index)) {
            card.classList.add('correct');
        }
    });
    
    showFeedback(isCorrect, exercise.explanation, exercise, false);
    
    // Show audio text after answer
    const audioTextDisplay = document.getElementById('audio-text-display');
    if (audioTextDisplay) {
        audioTextDisplay.style.display = 'block';
    }
    
    // Show translation after answer
    const translationDisplay = document.getElementById('translation-display-tts');
    if (translationDisplay) {
        translationDisplay.textContent = generateTranslation(exercise);
        translationDisplay.style.display = 'block';
    }
    
    // Enable the Next button - use ID for reliable selection
    const enableNextButton = () => {
        const nextBtn = document.getElementById('exercise-next-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
            return nextBtn;
        }
        return null;
    };
    
    // Try immediately
    let nextBtn = enableNextButton();
    
    // Also try after a short delay to ensure DOM is ready
    if (!nextBtn) {
        setTimeout(() => {
            nextBtn = enableNextButton();
            if (nextBtn) {
                scrollToNextButton(nextBtn);
            }
        }, 100);
    } else {
        scrollToNextButton(nextBtn);
    }
}

// Finish topic screen
function finishTopicScreen() {
    const levelBadgeElement = document.getElementById('completion-level-badge');
    finishTopic(points, currentExercises.length, topicBestScores, currentTopic, selectedLevel, completionMessage, finalScore, levelBadgeElement);
    
    if (exerciseContainer) exerciseContainer.classList.add('hidden');
    if (progressContainer) progressContainer.classList.add('hidden');
    if (completionScreen) completionScreen.classList.remove('hidden');
}

// Show topic selection screen
function showTopicSelection() {
    if (completionScreen) completionScreen.classList.add('hidden');
    if (exerciseContainer) exerciseContainer.classList.add('hidden');
    if (progressContainer) progressContainer.classList.add('hidden');
    if (topicSelectionScreen) topicSelectionScreen.classList.remove('hidden');
    renderTopicSelection(topicBestScores, selectedLevel, startTopicExercises);
}

// Show level selection screen
function showLevelSelection() {
    if (topicSelectionScreen) topicSelectionScreen.classList.add('hidden');
    if (levelSelectionScreen) levelSelectionScreen.classList.remove('hidden');
}

// Initialize the app
function initApp() {
    // Show level selection first
    if (levelSelectionScreen) {
        levelSelectionScreen.classList.remove('hidden');
    }
    
    renderLevelSelection(
        selectedLevel,
        (newLevel) => {
            selectedLevel = newLevel;
        },
        () => {
            if (levelSelectionScreen) levelSelectionScreen.classList.add('hidden');
            if (topicSelectionScreen) topicSelectionScreen.classList.remove('hidden');
            renderTopicSelection(topicBestScores, selectedLevel, startTopicExercises);
        }
    );
    
    if (newTopicBtn) {
        newTopicBtn.addEventListener('click', showTopicSelection);
    }
    
    if (restartTopicBtn) {
        restartTopicBtn.addEventListener('click', () => {
            if (completionScreen) completionScreen.classList.add('hidden');
            startTopicExercises(currentTopic);
        });
    }
    
    if (backToLevelsBtn) {
        backToLevelsBtn.addEventListener('click', showLevelSelection);
    }
    
    if (resetProgressBtn) {
        resetProgressBtn.addEventListener('click', resetProgress);
    }
}

// Reset all progress and clear localStorage
function resetProgress() {
    const confirmed = confirm(
        'Are you sure you want to reset all progress?\n\n' +
        'This will clear:\n' +
        '• All topic scores\n' +
        '• Exercise history\n\n' +
        'This action cannot be undone.'
    );
    
    if (confirmed) {
        // Clear all localStorage items related to the app
        localStorage.removeItem('jetztDeutschBestScores');
        localStorage.removeItem('jetztDeutschSetHistory');
        // Note: We keep 'darkMode' so theme preference is preserved
        
        // Reset app state
        topicBestScores = {};
        topicSetHistory = {};
        
        // Refresh the topic selection screen to show no scores
        if (topicSelectionScreen && !topicSelectionScreen.classList.contains('hidden')) {
            renderTopicSelection(topicBestScores, selectedLevel, startTopicExercises);
        }
        
        // Show a brief confirmation
        const originalText = resetProgressBtn.innerHTML;
        resetProgressBtn.innerHTML = '<i class="fas fa-check"></i> Reset Complete!';
        resetProgressBtn.style.color = 'var(--correct)';
        resetProgressBtn.style.borderColor = 'var(--correct)';
        
        setTimeout(() => {
            resetProgressBtn.innerHTML = originalText;
            resetProgressBtn.style.color = '';
            resetProgressBtn.style.borderColor = '';
        }, 2000);
    }
}

// Initialize the app when page loads
window.addEventListener('load', initApp);

// Make showTopicSelection available globally for inline onclick handlers
window.showTopicSelection = showTopicSelection;
