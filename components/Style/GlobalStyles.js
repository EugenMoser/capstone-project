import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    @font-face {
    font-family: "Quicksand";
    src: url("/fonts/Quicksand-Variable.ttf");
    }

    :root {
        --primary-color: #FFFFFF;
        --secondary-color: #FFF3E3;
        --tertiary-color: #589777;
        
        --navbar-icon: #706f6f;
        --navbar-icon-active: #e94163;

        --article-card: #e0e0e0;

        --border-radius: 5px;

        --checkbox-color: #97c3af;

        --modal-delete-color:#e94163;
}
    html,
    body {
        padding: 0;
        margin: 0;
    };

    * {
        box-sizing: border-box;
        font-family: "Quicksand", -apple-system, BlinkMacSystemFont,  "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    }
    body {
        background-color: var(--secondary-color)
    }
`;

export default GlobalStyles;
