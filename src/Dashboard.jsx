import { useState, useEffect } from 'react';
    import { getWords } from './wordService';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

    function Dashboard() {
      const [words, setWords] = useState([]);

      useEffect(() => {
        loadWords();
      }, []);

      async function loadWords() {
        const words = await getWords();
        setWords(words);
      }

      // Prepare data for the chart (example: words added per day)
      const chartData = () => {
        const dailyCounts = {};
        words.forEach(word => {
          const date = new Date(word.id).toLocaleDateString(); // Use word.id as timestamp
          dailyCounts[date] = (dailyCounts[date] || 0) + 1;
        });

        return Object.entries(dailyCounts).map(([date, count]) => ({
          date,
          wordsAdded: count,
        }));
      };

      const data = chartData();

      return (
        <>
          <h2>Dashboard</h2>
          <div>
            <h3>Words Learned Over Time</h3>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="wordsAdded" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
          <div>
            <h3>Total Words: {words.length}</h3>
          </div>
        </>
      );
    }

    export default Dashboard;
