import styled from "styled-components";
import { device, Tdevices } from "../../../devices";

export const LogiRaportStyle = styled.div`
    position: absolute;
    bottom: 64px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 62px;

    color: var(--white);
    font-size: 16px;

    background-color: var(--red);

    @media ${device.mobileL} {
        bottom: 76px;
    }
`;