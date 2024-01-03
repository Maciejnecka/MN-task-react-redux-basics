import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --main-bg-color: #f5f5dc;
}

body{
  background-color: var(--main-bg-color);
}
`;

export default GlobalStyles;
