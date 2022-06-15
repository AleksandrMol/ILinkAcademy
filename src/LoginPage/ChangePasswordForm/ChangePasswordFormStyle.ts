import styled from "styled-components";
import { device, Tdevices } from "../../devices";
import { LoginFormStyle } from "../LoginForm/LoginFormStyle";

export const ChangePasswordFormStyle = styled(LoginFormStyle)`
    min-height: 0px;
    height: 288px;
`;

export const ButtonContainerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 340px;

    @media ${device.tablet} {
        flex-direction: column;
        width: 100%;

        #exitButton{
            display: none;
        }
    }
`;

export const ArrowStyle = styled.div`
    position: absolute;
    left: 40px;
    top: 40px;
    width: 24px;
    height: 24px;

    
    transform: rotate(180deg);

    svg{
        stroke: var(--grey);
        transition: stroke 0.2s ease-in-out;
    }

    &:hover{
        cursor: pointer;

        svg{
            stroke: var(--purple);
        }
    }

    @media ${device.tablet} {
        left: 20px;
        top: 20px;
    }
`;