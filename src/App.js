import s from './App.module.css';
import React from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good * 100) / total) : 0;
  }

  createFeedbackOptionsComponent(options) {
    return (
      <FeedbackOptions
        options={options}
        onLeaveFeedback={this.handleLeaveFeedback}
      />
    );
  }

  createStatisticsComponent(total, goodPercentage) {
    return (
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={total}
        goodPercentage={`${goodPercentage} %`}
      />
    );
  }

  handleLeaveFeedback = e => {
    const label = e.target.innerText.toLowerCase();

    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const goodPercentage = this.countPositiveFeedbackPercentage();

    const feedbackOptionsComponent =
      this.createFeedbackOptionsComponent(options);
    const statisticsComponent = this.createStatisticsComponent(
      total,
      goodPercentage,
    );
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
  }
}

export default App;
