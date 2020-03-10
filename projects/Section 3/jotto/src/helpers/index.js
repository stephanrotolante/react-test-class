/**
 * @function getLetterMatchCount
 * @param {string} guessedWord - GuessedWord
 * @param {string} secretWord - secret word
 * @returns {number} - Number of letters matched between word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetterSet = new Set(secretWord.split(''));

    const guessedLetterSet = new Set(guessedWord.split(''));

    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
};