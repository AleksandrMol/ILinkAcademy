import styled from "styled-components";
import { device, Tdevices } from "../../../devices";

interface IButtonProps {

    rotate ?: 0 | 90 | 180 | 270 | 360,
    
} 

export const DirectionButtonStyle = styled.button<IButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;

    color: var(--purple);

    border: none;
    border-radius: var(--border-radius);
    background-color: var(--white);

    transform: rotate(${props => props.rotate}deg);
    transition: all 0.3s ease-in-out;
    z-index: 1;

    svg{
        stroke: var(--dark-grey);
        transition: all 0.3s ease-in-out;
    }

    &:disabled{
        background-color: #E0E0E0;
        cursor: default;
        svg{
           stroke: var(--grey); 
        }
        :hover{
            svg{
                stroke: var(--grey);
            }
        }
    }

    &:hover svg {
        stroke: var(--purple);
    }
    
    @media ${device.tablet}{
        display: none;
    }
`;