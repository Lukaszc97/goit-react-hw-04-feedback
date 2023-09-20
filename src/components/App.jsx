import React, { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export const App = () => {
  const [feedbackStats, setFeedbackStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedbackStats(prevStats => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

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
};
