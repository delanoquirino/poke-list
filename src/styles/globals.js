import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      
    }

    :root{
        --red-color: #e61717;
        --yellow-color: #ebe134;
        --blue-color: #1766e6;
        --text-color: #000;
    }

    @media (max-width: 1080px) {
    html {
        font-size: 58.5%;
    }
}   
    @media (max-width: 720px) {
    html {
        font-size: 48.5%;
    }
}
   
`;
