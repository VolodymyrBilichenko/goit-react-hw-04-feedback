import { SectionTitle } from './SectionTitle/SectionTitle';
import { Container } from './Container/Container';
import { useState } from 'react';
import { SectionBtn } from './SectionBtn/SectionBtn';
import { Statistic } from './Statistic/Statistic';
import { Notify } from './Notify/Notify';

export const App = () => {
  const initFeedback = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initFeedback);

  const changeOnClick = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };
  

  const countTotalFeedback = () => {
    const {good, neutral, bad} = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const maxTotal = countTotalFeedback();
    return maxTotal === 0 ? 0 : (feedback.good / maxTotal) * 100;
  };

  const renderStatistic = () => {
    const {good, neutral, bad} = feedback;
    if (countTotalFeedback() === 0) {
      return <Notify message={'There is no feedback, sorry'} />
    } else {
      return(
        <Statistic
          title={'Statistics'}
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          count={countPositiveFeedbackPercentage()}
        />
      )
    }
  }

  return (
    <Container>
      <SectionTitle title={'Please leave your feedback'} />

      <SectionBtn option={feedback} changeOnClick={changeOnClick} />
      
      {renderStatistic()}
    </Container>
  );
};
