import styled from "styled-components";
import { device, Tdevices } from "../devices";


const display: Tdevices = device;

export const HeaderStyle = styled.header`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: var(--side-padding);
    padding-right: var(--side-padding);
    height: 116px;
    
    background-color: var(--white);
    
    @media ${display.tablet}{
        height: 77px;
        padding-left: var(--side-padding-mobile);
        padding-right: var(--side-padding-mobile);
    }
`;

export const UserLinkStyle = styled.a`
    font-weight: 700;
    line-height: 18px;

    color: var(--dark-grey);
`;

export const LogoStyle = styled.div`
    position: absolute;
    left: calc(50% - 42.5px);

    width: 85px;
    height: 52px;

    @media ${display.mobileL}{
        left: calc(50% - 30px);

        width: 60px;
        height: 36px;
    }
`;
export const ButtonWithTextStyle = styled.div`
    @media ${display.tablet}{
        display: none;
    }
`;
export const ButtonWithIconStyle = styled.div`
    display: none;

    @media ${display.tablet}{
        display: inline-flex;
    }

    @media ${device.mobileL}{
    }
`;
