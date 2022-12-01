import { createGlobalStyle } from "styled-components";
//import localFont from "next/font/local";

//const Quicksand = localFont({ src: "./Font/Quicksand-Variable.ttf" });

const GlobalStyles = createGlobalStyle`


    @font-face {
    font-family: "Quicksand";
    src: url("/Fonts/Quicksand-Variable.ttf");
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Quicksand", -apple-system, BlinkMacSystemFont,  "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    };
        

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

        --border-radius: 5px;

        --checkbox-color: #97c3af;
}
`;

export default GlobalStyles;
