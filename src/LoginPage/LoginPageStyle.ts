import styled from "styled-components";
import { device, Tdevices } from "../devices";

import { AppContainer } from "../appContaiter";
import { Background } from "../Main/MainStyle";
import { LogoStyle } from "../Header/HeaderStyle";

export const LoginPageContainerStyle = styled(AppContainer)`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    min-height: 768px;
    height: 100vh;

    footer{
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;

export const LoginPageBackgroundStyle = styled(Background)`
    top: 252px;
    left: 0;
    right: 0;

    height: 1610px;
    width: 827px;

    /* svg{ */
        transform: rotate(90deg);
    /* } */
`;

export const LoginPageLogoStyle = styled(LogoStyle)`
    top: 40px;

    path{
        fill: var(--white);
    }

    @media ${device.mobileL}{
        top: 20px;
    }
`;