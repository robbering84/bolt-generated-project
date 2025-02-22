import { useState, useEffect } from 'react';
    import { getWords, deleteWord } from './wordService';

    function WordList() {
      const [words, setWords] = useState([]);

      useEffect(() => {
        loadWords();
      }, []);

      async function loadWords() {
        const words = await getWords();
        setWords(words);
      }

      async function handleDelete(id) {
        await deleteWord(id);
        loadWords();
      }

      return (
        <>
          <h2>Word List</h2>
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Definition</th>
                <th>Example</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {words.map(word => (
                <tr key={word.id}>
                  <td>{word.word}</td>
                  <td>{word.definition}</td>
                  <td>{word.example}</td>
                  <td>{word.notes}</td>
                  <td>
                    <button onClick={() => handleDelete(word.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }

    export default WordList;
