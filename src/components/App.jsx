import { SectionTitle } from './SectionTitle/SectionTitle';
import { Container } from './Container/Container';
import { Component } from 'react';
import { SectionBtn } from './SectionBtn/SectionBtn';
import { Statistic } from './Statistic/Statistic';
import { Notify } from './Notify/Notify';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeOnClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const maxTotal = this.countTotalFeedback();
    return maxTotal === 0 ? 0 : (this.state.good / maxTotal) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <SectionTitle title={'Please leave your feedback'} />

        <SectionBtn
          option={Object.keys(this.state)}
          changeOnClick={this.changeOnClick}
        />

        {this.countTotalFeedback() === 0 ? (
          <Notify message={'There is no feedback, sorry'} />
        ) : (
          <Statistic
            title={'Statistics'}
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            count={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Container>
    );
  }
}
