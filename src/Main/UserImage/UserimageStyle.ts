import styled from "styled-components";
import { device, Tdevices } from "../../devices";
let Image = require('../../img/userImage.jpg');

export const UserImageStyle = styled.div`
    width: 40.54%;

    border-radius: var(--border-radius);
    background-image: url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    background-color: #aaa;

    transform: translateY(32px);

    @media (max-width: 835px){
        width: 106.17%;
        height: 524px;
        transform: translateY(0);
    }

    @media ${device.mobileL}{
        height: 300px;
    }

    @media ${device.mobileS}{
        height: 200px;
    }

`;