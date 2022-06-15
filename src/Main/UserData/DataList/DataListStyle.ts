import styled from "styled-components";
import { device, Tdevices } from "../../../devices";

export const DataListStyle = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

    @media ${device.mobileL}{
        justify-content: space-between;
    }

`;

export const DataItemStyle = styled.li`
    margin-right: 20px;

    @media ${device.mobileL}{
        margin-right: 0;   
    }
`;