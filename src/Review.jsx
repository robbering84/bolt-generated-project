import { useState, useEffect } from 'react';
    import { getWords } from './wordService';

    function Review() {
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
          <h2>Review</h2>
          <h3>{currentWord.word}</h3>
          {showDefinition ? (
            <>
              <p>{currentWord.definition}</p>
              <p>{currentWord.example}</p>
              <p>{currentWord.notes}</p>
              <button onClick={handleNext}>Next Word</button>
            </>
          ) : (
            <button onClick={handleShowDefinition}>Show Definition</button>
          )}
        </>
      );
    }

    export default Review;
