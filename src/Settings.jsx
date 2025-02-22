import React, { useState } from 'react';

    function Settings() {
      const [newWordsPerDay, setNewWordsPerDay] = useState(10);
      const [dailyReviewGoal, setDailyReviewGoal] = useState(20);

      return (
        <>
          <h2>Settings</h2>
          <p>Customize your learning experience here.</p>

          <div className="settings-section">
            <h3>Review Settings</h3>
            <div className="setting-item">
              <label htmlFor="newWordsPerDay">New Words Per Day:</label>
              <input
                type="number"
                id="newWordsPerDay"
                name="newWordsPerDay"
                value={newWordsPerDay}
                onChange={(e) => setNewWordsPerDay(e.target.value)}
                min="1"
                max="100"
              />
              <p className="setting-description">Set the number of new words you want to learn each day.</p>
            </div>
            <div className="setting-item">
              <label htmlFor="dailyReviewGoal">Daily Review Goal:</label>
              <input
                type="number"
                id="dailyReviewGoal"
                name="dailyReviewGoal"
                value={dailyReviewGoal}
                onChange={(e) => setDailyReviewGoal(e.target.value)}
                min="10"
                max="200"
              />
              <p className="setting-description">Set your target number of words to review daily.</p>
            </div>
          </div>
        </>
      );
    }

    export default Settings;
