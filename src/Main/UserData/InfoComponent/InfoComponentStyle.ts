import styled from "styled-components";

export const InfoComponentStyle = styled.p`
    display: inline-block;
    margin: 0;

    font-size: 18px;
`;

export const CategoryStyle = styled.span`
    margin: 0;
    margin-right: 5px;
    
    font-weight: 700;
    line-height: 24px;
    color: var(--dark-grey);

    @media (max-width: 835px){
        font-size: 16px;
    }
`;
export const ValueStyle = styled.span`
    margin: 0;
    
    font-weight: 500;
    line-height: 24px;
    color: var(--dark-grey);

    @media (max-width: 835px){
        font-size: 16px;
    }
`;
export const IconStyle = styled.span`
    margin-left: 10px;
`;