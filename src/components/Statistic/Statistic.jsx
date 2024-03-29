import { Container } from "components/Container/Container";
import { StatisticStyle } from "./Statistic.styled"

export const Statistic = ({ good, neutral, bad, total, count, title }) => {
    return (
        <Container>
            <h2 className='title__stat'>{ title }</h2>
            <StatisticStyle>
                <li className="stat__txt">Good: {good}</li>
                <li className="stat__txt">Neutral: {neutral}</li>
                <li className="stat__txt">Bad: {bad}</li>
                <li className="stat__txt">Total: {total}</li>
                <li className="stat__txt">Positive feedback: {count.toFixed(0)}%</li>
            </StatisticStyle>
        </Container>
    )
};
