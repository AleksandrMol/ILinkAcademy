import styled from "styled-components";
import { device, Tdevices } from "../../../../devices";

export const InputComponentStyle = styled.div`
    position: relative;

    display: flex;
    flex-flow: column;
    flex-grow: 1;
`;

export const LabelStyle = styled.label`
    margin-bottom: 14px;

    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.0124em;
    color: var(--dark-grey);

    @media ${device.tablet}{
        margin-bottom: 8px;
        
        font-size: 14px;
    }
`;

export const InputStyle = styled.input`
    height: 50px;
    padding-left: 12px;
    padding-right: 12px;

    font-size: 14px;
    font-weight: 400;
    color: var(--dark-grey);

    border: 1px solid var(--light-grey);
    border-radius: 2px;

    transition: all 0.2s ease-in-out;

    &::placeholder{
        color: var(--grey);
    }
    &:hover{
        border-color: var(--purple);
    }
    &:focus{
        outline: none;
        border-color: var(--purple);
    }
    &:disabled{
        &::placeholder{
            color: var(--light-grey);
        }
        background-color: var(--white);
    }

    &:invalid{
        border-color: var(--red);
    }

    @media ${device.tablet}{
        height: 42px;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    
    transform: translateX(12px);
    
    svg{
        cursor: pointer;
        margin-right: 12px;
    }

    @media ${device.tablet}{
        bottom: 8px;
    }
`;

export const TextareaStyle = styled.textarea`
    height: 100%;
    width: 100%;
    padding: 12px;

    font-size: 14px;
    font-weight: 400;
    color: var(--dark-grey);

    border: 1px solid var(--light-grey);
    border-radius: 2px;
    resize: none;

    transition: all 0.2s ease-in-out;

    &::placeholder{
        color: var(--grey);
    }
    &:hover{
        border-color: var(--purple);
    }
    &:focus{
        outline: none;
        border-color: var(--purple);
    }
    &:disabled{
        &::placeholder{
            color: var(--light-grey);
        }
        background-color: var(--white);
    }
    &:invalid{
        border-color: var(--red);
    }
`;

export const CharacterCountStyle = styled.span`
    position: absolute;
    right: 4px;
    bottom: 4px;

    font-size: 10px;
    line-height: 14px;
    color: var(--grey);
`;