import { styled } from "styled-components";

export const SectionBtnStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
    gap: 15px;

    .button-stat{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 25px;
        padding: 10px 20px;
        background-color: #c3a488;
        color: #f5f5f5;
        border-radius: 5px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover{
            background-color: #ad825c;
        }
    }
`