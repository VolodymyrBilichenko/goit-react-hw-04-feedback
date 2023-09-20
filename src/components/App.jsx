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
    setFeedback(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const maxTotal = countTotalFeedback();
    return maxTotal === 0 ? 0 : (good / maxTotal) * 100;
  };

  return (
    <Container>
      <SectionTitle title={'Please leave your feedback'} />

      <SectionBtn option={Object.keys()} changeOnClick={changeOnClick} />

      {this.countTotalFeedback() === 0 ? (
        <Notify message={'There is no feedback, sorry'} />
      ) : (
        <Statistic
          title={'Statistics'}
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          count={countPositiveFeedbackPercentage()}
        />
      )}
    </Container>
  );
};
