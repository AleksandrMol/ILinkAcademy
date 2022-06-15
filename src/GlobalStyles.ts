import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --side-padding: 5.5%;
        --side-padding-mobile: 5%;

        --white: #fff;
        --purple: #585CC6;
        --purple-hover: #797DDF;
        --white-purple-hover: #C2C4FF;
        --grey: #8A8A8A;
        --light-grey: #E0E0E0;
        --light-grey-2: #F5F5F5;
        --dark-grey: #333;
        --red: #EB5757;
        --red-hover: #FB8F8F;

        --text-size: 18px;
        --header-size: 124px;

        --border-radius: 2px;
        --white-button-border: 1px solid var(--purple);
    }

    *{
        box-sizing: border-box;

        font-size:var(--text-size);
    }

    body{
        margin: 0;
    }

    a{
        text-decoration: none;
        
    }

    ul{
        margin: 0;
        padding: 0;

        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;

// ФОООУРТИНАЙТ_ИЛЯ_БААБАДЖИИИ??!!!