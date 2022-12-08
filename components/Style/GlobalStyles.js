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

       

        --border-radius: 5px;

        --checkbox-color: #97c3af;

        --color-red: #e94163;

        --image-background-color: #97c3af;
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
    
    main {
    margin-bottom: 70px;
    }

   
    h1{
       margin: 0;
       font-weight: 700;
       font-size: 1.5rem;
       z-index: 100;
   }

    h2{
        font-size: 1.25rem;
        margin: 20px 25px 10px 25px; 
    }

    h3 {
        font-size: 1rem;
        margin: 10px 0 5px 20px;
    }


    h4{
        font-size: 1rem;
        margin: 60px 0 0 0;
    }

    p {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        margin-top: 40px;

    }

    p  span {
        padding:10px;
    }



`;

export default GlobalStyles;
