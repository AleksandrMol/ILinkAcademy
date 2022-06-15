import styled from "styled-components";

interface IDateStyleProps {
    size?: 18 | 14,
}

export const DateStyle = styled.time<IDateStyleProps>`
    font-weight: 400;
    font-size: ${props => props.size == undefined ? 18 : props.size}px;
    color: var(--grey);

    cursor: default;
`;