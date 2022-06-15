import styled from "styled-components";
import { device, Tdevices } from "../devices";
import { CloseIcon } from '../Main/Reviews/ReviewAdd/ReviewAddStyle';

export const FixedContainerStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: end;
    align-items: end;
    padding: 104px 40px;

    z-index: 2;

    @media ${device.tablet} {
        padding: 108px 16px;
    }
`;

export const TextStyle = styled.div`
    width: 244px;
`;

export const MessageFailStyle = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    padding-right: 24px;
    width: 438px;
    height: 132px;
    margin-top: 100px;

    color: var(--white);

    border-radius: 32px;
    background-color: #F64B3C;

    @media ${device.tablet} {
        width: 288px;
        ${TextStyle}{
            transform: translate(-10px, -5px);
        }
        h2{
            font-size: 24px;
        }
    }
`;

export const IconStyle = styled.div`
    position: relative;

    align-self: flex-end; 
    margin-right: 30px;
    height: 135%;
    width: 100px;
svg{
        position: absolute;
        top: -30px;
        left: -80px;

        transform: translateY(30px);
    }

    border-radius: 0 0 0 32px;
    overflow: hidden;

    @media ${device.tablet} {
        width: 130px;
        margin-right: 0;
    }
`;

export const MessageLuckStyle = styled(MessageFailStyle)`
    background-color: #B5FFA2;

    color: var(--dark-grey);

    ${IconStyle} {
        svg{
            left: -60px;
        }
    } 
    @media ${device.tablet} {
        ${TextStyle}{
            transform: translate(0);
        }
    }
`;


export const MessageTextStyle = styled.p`
    margin: 0;
    margin-top: 5px;

    font-size: 14px;
`;
export const CloseIconFaleStyle = styled(CloseIcon)`
    position: absolute;
    top: 24px;
    right: 24px;

    &::before{
        background-color: var(--white);
    }
    &::after{
        background-color: var(--white);
    }
    &:hover {
        &::after{
            background-color: var(--light-grey);
        }
        &::before{
            background-color: var(--light-grey);
        }
    }
    @media ${device.tablet}{
        top: 16px;
        right: 16px;
    }
`;
export const CloseIconLuckStyle = styled(CloseIconFaleStyle)`
    &::before{
        background-color: var(--dark-grey);
    }
    &::after{
        background-color: var(--dark-grey);
    }
    &:hover {
        &::after{
            background-color: var(--grey);
        }
        &::before{
            background-color: var(--grey);
        }
    }
`;