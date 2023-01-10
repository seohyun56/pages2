import reset from "styled-reset"
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Extra+Condensed:wght@300;500&display=swap');

    body {
        font-family: 'Sofia Sans Extra Condensed', sans-serif;
        font-weight:300;
        font-size:18px;
        line-height: 1.6;
    }
`;

export default GlobalStyle;