import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --main-bg-color: #f5f5f5;

   --main-font-color: #333;

   --main-font-white-color: #fff;

   --main-border-color: #7a8baa;

   --red-font-color: #760000;

   --red-font-delete-color: #e76f51;

   --border-radius: 6px;
}

body{
  background-color: var(--main-bg-color);
}
`;

export default GlobalStyles;
