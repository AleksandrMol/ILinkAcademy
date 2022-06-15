import styled from "styled-components";
import { device, Tdevices } from "../../../../devices";

export const InfoStyle = styled.div`
    display: flex;
    align-items: center;
`;
export const Icon = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    
    svg{
        width: 100%;
        height: 100%;
    }
    
    @media ${device.tablet}{
        width: 13px;
        height: 13px;
        
        svg{
            transform: translateY(-3px);
        }
    }
`;



export const Text = styled.span`
    font-size: 12px;
    line-height: 16px;
    color: var(--grey);
    
    @media ${device.tablet}{
        font-size: 10px;
        line-height: 12px;
    }
`;

export const ToolText = styled.p`
    margin: 0;
    font-size: 10px;
    line-height: 14px;
    color: var(--dark-grey);
`;

export const ToolContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: calc(100% + 7px);
    
    width: 164px;
    padding : 8px;
    
    background-color: var(--light-grey-2);
    transition: opacity 0.3s ease-in-out;
    opacity: 0;

    @media ${device.tablet} {
        opacity: 1;
    }
`;
export const TollIcon = styled.div`
    
`;
export const InfoStyleTolltip = styled.div`
    position: relative;

    display: inline-flex;
    justify-content: center;

    &:hover{
        ${ToolContainer}{
            opacity: 1;
        }
    }
`;