import styled from "styled-components";
import { device, Tdevices } from "../../devices";

import { Background } from "../../Main/MainStyle";
import { ReviewAddFormStyle } from "../../Main/Reviews/ReviewAdd/ReviewAddStyle";

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

export const LoginFormStyle = styled(ReviewAddFormStyle)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 437px;
    min-height: auto;
    margin-top: 136px;
    padding: 40px 40px 24px;

    border-radius: var(--border-radius);
    background-color: var(--white);

    @media ${device.tablet}{
        height: 386px;
        padding: 16px;

        h2{
            font-size: 24px;
        }
    }
`;

export const InputBlock = styled.div`
    width: 100%;

    label{
        font-size: 14px;
        margin-bottom: 4px;
    }
`;

export const EnterButtonStyle = styled.div`
    @media ${device.tablet}{
        width: 100%;
        button{
            width: 100%;
            padding-top: 12px;
            padding-bottom: 12px;
        }
    }
`;

export const ButtonsLinkStyle = styled.div`
    display: none;
`;

export const ToChangeLinkStyle = styled.div`
    a{
        font-size: 12px;
        color: var(--purple);  
        text-decoration: underline;    
        
        &:hover{
            color: var(--purple-hover);
        }
    }
`;