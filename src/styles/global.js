import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F5EFE6;
    --accent: #E8DFCA;
    --light: #AEBDCA;
    --dark: #7895B2;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background-color: var(--background);
    width: 100vw;
    justify-content: center;
    font-family: 'Cormorant Infant', serif;
}
`;
