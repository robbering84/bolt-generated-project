import { useState } from 'react';
    import { saveWord } from './wordService';
    import Papa from 'papaparse';

    function ImportWords() {
      const [csvFile, setCsvFile] = useState(null);

      const handleFileChange = (event) => {
        setCsvFile(event.target.files[0]);
      };

      const handleImport = () => {
        if (!csvFile) {
          alert('Please select a CSV file.');
          return;
        }

        Papa.parse(csvFile, {
          header: true,
          complete: async (results) => {
            if (results.data && results.data.length > 0) {
              for (const row of results.data) {
                if (row.word && row.definition) {
                  await saveWord({
                    word: row.word,
                    definition: row.definition,
                    example: row.example || '',
                    notes: row.notes || '',
                  });
                }
              }
              alert('Words imported successfully!');
            } else {
              alert('Failed to parse CSV file.');
            }
          },
          error: (error) => {
            console.error('CSV parsing error:', error.message);
            alert('Error parsing CSV file: ' + error.message);
          },
        });
      };

      return (
        <>
          <h2>Import Words from CSV</h2>
          <div>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
            />
            <button onClick={handleImport} disabled={!csvFile}>
              Import
            </button>
          </div>
        </>
      );
    }

    export default ImportWords;
