import React, { useState, useEffect } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  // Stan początkowy
  const initialFeedbackStats = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Stan feedbackStats oraz funkcja do jego aktualizacji
  const [feedbackStats, setFeedbackStats] = useState(
    JSON.parse(localStorage.getItem('feedbackStats')) || initialFeedbackStats
  );

  // Efekt do zapisu stanu feedbackStats w localStorage
  useEffect(() => {
    localStorage.setItem('feedbackStats', JSON.stringify(feedbackStats));
  }, [feedbackStats]);

  // Obsługa kliknięcia przycisków feedback
  const handleFeedback = type => {
    setFeedbackStats(prevStats => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

  // Sprawdzenie, czy są jakieś dane w feedbackStats
  const hasFeedback = Object.values(feedbackStats).some(value => value > 0);

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Expresso Cafe Feedback</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />
      {hasFeedback ? (
        <Statistics
          good={feedbackStats.good}
          neutral={feedbackStats.neutral}
          bad={feedbackStats.bad}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default App;
