import styled from "styled-components";
import { device, Tdevices } from "../../devices";

const display: Tdevices = device;

interface IStylesButton{
    bgWhite?: boolean,
}

export const ButtonStyle = styled.button<IStylesButton>`
    position: relative;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 17px 28px;

    color: ${props => props.bgWhite? "var(--purple)" : "var(--white)"};
    font-weight: 600;

    border: none;
    border-radius: var(--border-radius);
    border: ${props => props.bgWhite? "var(--white-button-border)" : ""};
    background-color: ${props => props.bgWhite? "var(--white)" : "var(--purple)"} ;
    
    &:disabled{
        background-color: var(--grey);
    }

    &::before{
        position: absolute;
        content: '';

        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;

        background-color: ${props => props.bgWhite? "var(--white-purple-hover)" : "var(--purple-hover)"};
        z-index: 0;

        transition: all 0.3s ease-in-out;
    }

    &:hover::before{
        right: 0;
    }
    @media ${display.tablet}{
        padding: 8px;
    }
`;

export const IconStyle = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 10px;

    transform: translateY(2px);

    @media ${display.tablet}{
        margin-right: 0;
    }
`;

export const TextStyle = styled.span`
    transform: translateX(-3px);
    z-index: 1;

    @media ${device.tablet}{
        font-size: 14px;

        transform: translateX(0);
    }
`;