import styled from "styled-components";
import { device, Tdevices } from "../devices";

const display: Tdevices = device;

export const MainStyle = styled.main`
    position: relative;
    
    /* height: 1643px; */
    padding-top: 93px;

    @media (max-width: 540px){
        padding-top: 40px;
    }

`;

export const Background = styled.div`
    position: absolute;
    width: 642px;
    height: 1610px;
    right: 0;
    top: 0;
    
    z-index: 0;
`;

export const HeaderText = styled.h1`
    max-width: 1377px;
    margin: 0;
    margin-bottom: 88px;
    padding-left: var(--side-padding);
    padding-right: var(--side-padding);

    font-size: var(--header-size);
    font-weight: 500;
    color: var(--white);

    @media (max-width: 835px){
        font-size: 80px;
        margin-bottom: 64px;
    }
    
    @media (max-width: 540px){
        font-size: 47px;
        line-height: 54px;
    }
`;

export const AboutUser = styled.section`
    position: relative;
    display: flex;
    align-content: stretch;
    margin-bottom: 152px;
    padding-left: var(--side-padding);
    padding-right: var(--side-padding);

    z-index: 1;

    @media (max-width: 835px){
        flex-direction: column;

        margin-bottom: 80px;
    }

    @media ${device.mobileL}{
        margin-bottom: 52px;
    }
`;

export const ReviewsStyle = styled.section`
    display: flex;
    justify-content:space-between;
    height: 525px;
    margin-bottom: 106px;
    padding-right: var(--side-padding);
    
    @media (max-width: 1170px){
        height: 550px;
    }

    @media (max-width: 835px){
        height: 580px;
        margin-bottom: 82px;
    }

    @media ${device.mobileL}{
        height: auto;
    }
`;