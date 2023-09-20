import { nanoid } from 'nanoid';
import { SectionBtnStyle } from './SectionBtn.styled';

export const SectionBtn = ({changeOnClick, option}) => {
    return (
        <SectionBtnStyle>
            {option.map(feedback => (
                <button className='button-stat'
                    type='button'
                    key={nanoid()}
                    onClick = {() => changeOnClick(feedback)}
                >{feedback}</button>
            ))}
        </SectionBtnStyle>
    )
}