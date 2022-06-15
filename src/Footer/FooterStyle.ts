import styled from "styled-components";
import { device, Tdevices } from "../devices";

interface IIconLinkProps {
    width: number,
    height: number,
}

export const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 5.5%;
    padding-right: 5.5%;
    min-height: 64px;

    background-color: #F5F5F5;

    @media ${device.mobileL}{
        justify-content: center;
        padding-bottom: 12px;
    }
`;

export const Copyright = styled.p`
    margin-right: 20px;

    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #8A8A8A;

    @media ${device.mobileL}{
        font-size: 12px;
        color: var(--black);

        span{
            display: none;
        }
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 104px;
`;

export const IconLink = styled.a<IIconLinkProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;