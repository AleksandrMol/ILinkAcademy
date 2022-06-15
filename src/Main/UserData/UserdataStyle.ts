import styled from "styled-components";
import { device, Tdevices } from "../../devices";

export const UserDataStyle = styled.div`
    position: relative;
    
    width: 59.54%;
    padding: 40px;

    border-radius: var(--border-radius);
    background-color: #fff;

    @media (max-width: 835px){
        width: 100%;

        transform: translateY(-11px);
    }
    @media ${device.mobileL}{
        padding: 16px;
    }
`;

export const NameDateContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 835px){
        display: block;

        h2{
            margin-bottom: 4px;

            font-size: 24px;
        }
        time{
            font-size: 16px;
        }
    }

    @media ${device.mobileL}{
        margin-bottom: 16px;
    }
`;

export const AboutStyle = styled.div`
    margin-bottom: 36px;

    @media ${device.mobileL}{
        margin-bottom: 16px;
    }
`;

export const PetStyle = styled.div`

    display: flex;
    align-items: center;
`;

export const IconStyle = styled.span`
    margin-right: 12px;
    transform: translateY(2px);
`;