import styled from "styled-components";
import { device, Tdevices } from "../../devices";

const display: Tdevices = device;
let Image = require('../../img/userImage.jpg');

export const UserLinkStyle = styled.a`
    display: flex;
    align-items: center;

    font-weight: 700;
    line-height: 18px;
    color: var(--dark-grey);

    `;

export const ImageStyle = styled.div`
    display: inline-block;
    width: 52px;
    height: 52px;
    margin-right: 20px;
    
    border-radius: var(--border-radius);
    background-image: url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    @media ${display.tablet}{
        width: 36px;
        height: 36px;
        margin-right: 8px;
    }
    `;

export const TextStyle = styled.span`
    @media ${display.mobileL}{
        font-size: 12px;
        line-height: 14px;
    }
    @media ${display.tablet}{
        & span{
            display: none;
        }
    }
`;