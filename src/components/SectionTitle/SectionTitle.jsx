import { SectionTitleStyle } from './SectionTitle.styled';

export const SectionTitle = ({title}) => {
    return (
        <SectionTitleStyle>
            <h2 className='title'>{ title }</h2>
        </SectionTitleStyle>
    )
}