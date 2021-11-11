import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-dark: #000000;
    --primary-light: #FFFFFF;
    --tags-background: #9C9A9A;
    --tags-text: #FFFFFF;
  }

  html {
    color: var(--primary-dark);
  }

  a {
    color: var(---primary-dark);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;
