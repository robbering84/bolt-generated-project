import { useState } from 'react';
    import { saveWord } from './wordService';

    function AddWord() {
      const [word, setWord] = useState('');
      const [definition, setDefinition] = useState('');
      const [example, setExample] = useState('');
      const [notes, setNotes] = useState('');

      async function handleSubmit(event) {
        event.preventDefault();
        await saveWord({ word, definition, example, notes });
        setWord('');
        setDefinition('');
        setExample('');
        setNotes('');
      }

      return (
        <>
          <h2>Add New Word</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="word">Word:</label>
              <input
                type="text"
                id="word"
                value={word}
                onChange={e => setWord(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="definition">Definition:</label>
              <input
                type="text"
                id="definition"
                value={definition}
                onChange={e => setDefinition(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="example">Example:</label>
              <input
                type="text"
                id="example"
                value={example}
                onChange={e => setExample(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="notes">Notes:</label>
              <input
                type="text"
                id="notes"
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>
            <button type="submit">Add Word</button>
          </form>
        </>
      );
    }

    export default AddWord;
