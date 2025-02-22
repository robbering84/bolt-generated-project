import localforage from 'localforage';

    const WORDS_KEY = 'words';

    export async function getWords() {
      try {
        const words = await localforage.getItem(WORDS_KEY);
        return words ? JSON.parse(words) : [];
      } catch (error) {
        console.error("Failed to get words:", error);
        return [];
      }
    }

    export async function saveWord(word) {
      try {
        const words = await getWords();
        word.id = Date.now();
        words.push(word);
        await localforage.setItem(WORDS_KEY, JSON.stringify(words));
      } catch (error) {
        console.error("Failed to save word:", error);
      }
    }

    export async function deleteWord(id) {
      try {
        let words = await getWords();
        words = words.filter(word => word.id !== id);
        await localforage.setItem(WORDS_KEY, JSON.stringify(words));
      } catch (error) {
        console.error("Failed to delete word:", error);
      }
    }
