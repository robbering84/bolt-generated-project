import { useState, useEffect } from 'react';
    import { getWords } from './wordService';

    function Flashcards() {
      const [words, setWords] = useState([]);
      const [currentWordIndex, setCurrentWordIndex] = useState(0);
      const [showDefinition, setShowDefinition] = useState(false);

      useEffect(() => {
        loadWords();
      }, []);

      async function loadWords() {
        const words = await getWords();
        setWords(words);
      }

      const handleNext = () => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setShowDefinition(false);
      };

      const handleShowDefinition = () => {
        setShowDefinition(true);
      };

      if (words.length === 0) {
        return <h2>No words to review. Add some words first!</h2>;
      }

      const currentWord = words[currentWordIndex];

      return (
        <>
          <h2>Flashcards</h2>
          <div className="flashcard">
            <h3>{showDefinition ? currentWord.definition : currentWord.word}</h3>
            {showDefinition && (
              <>
                <p>{currentWord.example}</p>
                <p>{currentWord.notes}</p>
              </>
            )}
            <button onClick={handleShowDefinition}>
              {showDefinition ? 'Show Word' : 'Show Definition'}
            </button>
            <button onClick={handleNext}>Next Word</button>
          </div>
        </>
      );
    }

    export default Flashcards;
