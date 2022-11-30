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
        background-color: var(--secondary-color)
    }
    :root {
        --primary-color: #FFFFFF;
        --secondary-color: #FFF3E3;
        --tertiary-color: #589777;
        
        --navbar-icon: #706f6f;
        --navbar-icon-active: #e94163;

        --article-card: #e0e0e0;
}
`;

export default GlobalStyles;
