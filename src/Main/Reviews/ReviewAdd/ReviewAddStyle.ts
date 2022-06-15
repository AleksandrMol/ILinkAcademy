import styled from "styled-components";
import { device, Tdevices } from "../../../devices";

export const ReviewAddContainerStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    
    z-index: 10;
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    filter: blur(10px);
    cursor: pointer;
`;

export const ReviewAddFormStyle = styled.form`
    position: relative;

    width: 676px;
    min-height: 443px;
    padding: 24px;

    background-color: var(--white);
    z-index: 11;

    @media ${device.tablet}{
        width: 89%;
        padding: 16px;
    }


`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const CloseIcon = styled.div`
    position: relative;

    width: 18px;
    height: 18px;

    transform: rotate(45deg);
    cursor: pointer;

    &::before{
        content: '';
        position: absolute;

        left: 8px;
        height: 100%;
        width: 2px;

        background-color: var(--grey);
        transition: all 0.2s ease-in-out;
    }
    &::after{
        content: '';
        position: absolute;

        top: 8px;
        width: 100%;
        height: 2px;

        background-color: var(--grey);
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        &::after{
            background-color: var(--purple);
        }
        &::before{
            background-color: var(--purple);
        }
    }
`;

export const NamePhotoStyle = styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 32px;

    input{
        width: 380px;
    }

    @media ${device.tablet}{
        margin-bottom: 24px;

        input{
            width: 100%;
        }
    }
`;

export const InputStyle = styled.div`
    flex-grow: 1;
    margin-right: 16px;

    @media ${device.tablet}{
        flex-grow: 0;
        width: 100%;
        margin-right: 0;
        margin-bottom: 12px;
    }
`;

export const TextareaStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 137px;
    margin-bottom: 40px;

    @media ${device.tablet}{
        margin-bottom: 32px;
    }
`;

export const SendButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 560px;

    @media ${device.tablet}{
        flex-direction: column-reverse;
        width: 100%;

        button{
            width: 100%;
            padding-top: 12px;
            padding-bottom: 12px;
        }

        #sendId{
            margin-bottom: 12px;
        }
    }
`;

