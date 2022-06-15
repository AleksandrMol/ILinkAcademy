import styled from "styled-components";

interface ISectionHeaderStyleProps {

    color?: string,
    size?: number,
    weight?: number,
   } 

export const SectionHeaderStyle = styled.h2<ISectionHeaderStyleProps>`
    margin: 0;

    font-weight: ${props => props.weight == undefined? 700 : props.weight};
    font-size: ${props => props.size == undefined? 32 : props.size}px;
    color: ${props => props.color};
`;