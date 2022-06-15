import styled from "styled-components";
import { device, Tdevices } from "../../../devices";

interface IIconStyleProps {
    avatarUrl?: string;
}

export const ReviewComponentStyle = styled.div`
    padding: 24px;
    height: 279px;

    background-color: var(--light-grey-2);

    @media (max-width: 1170px){
        height: 100%;
    }
`;

export const HeaerBlockStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;

    @media ${device.mobileL}{
        margin-bottom: 12px;
    }
`;

export const HeaderStyle = styled.h3`
    display: flex;
    align-items: center;
    margin: 0;
    
    font-weight: 500;
    font-size: 24px;
    color: var(--dark-grey);
    
    @media (max-width: 1170px){
        margin-bottom: 12px;
        
        font-size: 16px;
    }
    @media ${device.mobileL}{
        margin-bottom: 12px;
        
    }
`;

// let image = require('../../../img/review_1_ava.jpg');
export const AvatarStyle = styled.div<IIconStyleProps>`
    width: 52px;
    height: 52px;
    margin-right: 20px;

    @media (max-width: 1170px){
        height: 40px;
        width: 40px;
    }
`;
export const DateStyle = styled.div`
    font-weight: 400;
    font-size: 14px;
    
    @media (max-width: 835px){
        font-size: 10px;
    }
`;

export const TextStyle = styled.p`
    margin: 0;

    text-align: start;
    font-weight: 400;
    font-size: 14px;
    color: var(--dark-grey);

    @media ${device.mobileL}{
        font-size: 12px;
    }
`;