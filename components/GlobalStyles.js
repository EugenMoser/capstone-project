import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    @font-face {
    font-family: "Quicksand";
    src: url(./Font/Quicksand-Variable.ttf);
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Quicksand", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
        
    }

    * {
        box-sizing: border-box;
    }
    body {
        background-color: lightgrey
    }
    :root {
        --primary-color: #FFFFFF;
        --secondary-color: #e0e0e0;
        --tertiary-color: #589777;
        
        --navbar-icon: #706f6f;
        --navbar-icon-active: #e94163;

        --image-width: 28.5%; 
        --footer-height: 8%;
        --footer-width: 100%;

        --header-height: 10%;
        --header-width: 10%;

        --button-size: 35px;

        --border-radius-circle: 10px;
        --input-width: 100%;
}
`;

export default GlobalStyles;
