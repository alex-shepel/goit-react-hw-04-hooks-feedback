import s from './App.module.css';
import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

const Options = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = total => {
    return total ? Math.round((good * 100) / total) : 0;
  };

  const createFeedbackOptionsComponent = () => (
    <FeedbackOptions
      options={Object.values(Options)}
      onLeaveFeedback={handleLeaveFeedback}
    />
  );

  const createStatisticsComponent = (total, goodPercentage) => (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      goodPercentage={`${goodPercentage} %`}
    />
  );

  const handleLeaveFeedback = e => {
    const label = e.target.innerText.toLowerCase();

    switch (label) {
      case Options.GOOD: {
        setGood(c => c + 1);
        return;
      }
      case Options.NEUTRAL: {
        setNeutral(c => c + 1);
        return;
      }
      case Options.BAD: {
        setBad(c => c + 1);
        return;
      }
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const goodPercentage = countPositiveFeedbackPercentage(total);

  const feedbackOptionsComponent = createFeedbackOptionsComponent();
  const statisticsComponent = createStatisticsComponent(total, goodPercentage);
  const notificationComponent = (
    <Notification message={'There is no feedback.'} />
  );

  return (
    <div className={s.container}>
      <Section
        title={'Please leave feedback'}
        children={feedbackOptionsComponent}
      />
      <Section
        title={'Statistics'}
        children={total ? statisticsComponent : notificationComponent}
      />
    </div>
  );
};

export default App;
