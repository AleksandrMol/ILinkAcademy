import styled from "styled-components";
import { device, Tdevices } from "../../devices";

// export const RelativeContainer = styled.div`
//     display: flex;
//     justify-content:space-between;
//     width: 100%;
//     height: 100%;
// `;

export const ContainerStyle = styled.div`
    width: 88.04%;
    height: 100%;
    margin-right: 16px;
    padding: 56px 4.12% 32px 5.88%;
    
    border-radius: var(--border-radius);
    background-color: var(--white);

    @media (max-width: 1170px){
        width: 85%;
    }
    @media (max-width: 835px){
        width: 81%;
    }
    @media ${device.tablet}{
        width: 100%;
    }
    @media (max-width: 615px){
        height: 479px;
        padding: 20px 15px;
    }
    @media ${device.mobileL}{
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 38px;

    @media (max-width: 615px){
        margin-bottom: 21px;
    }
    @media (max-width: 835px){
        h2{
            font-size: 32px;
        }
    }
`;

export const ButtonWithTextStyle = styled.div`
    @media ${device.tablet}{
        display: none;
    }
`;
export const ButtonWithIconStyle = styled.div`
    display: none;

    @media ${device.tablet}{
        display: inline-flex;
    }

    @media ${device.mobileL}{
        /* button{
            padding: 0;
        } */
    }
`;

export const ButtonsStyle = styled.div`
    align-self: flex-end;

    display: flex;
    justify-content: space-between;
    width: 128px;
`;


