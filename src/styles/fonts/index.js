import { createGlobalStyle } from 'styled-components';

import RubikDoodleShadow from '../fonts/RubikDoodleShadow-Regular.ttf';

const fontFiles = [
  {
    family: 'RubikDoodleShadow',
    style: 'regular',
  },
];

const createFontFace = ({ family, style }) => `
  @font-face {
    font-family: '${family}';
    font-style: ${style};
    src: url(${RubikDoodleShadow}) format('woff2');
  }
`;

const GlobalFonts = createGlobalStyle`
  ${fontFiles.map(createFontFace)}
  html{
  font-family: 'RubikDoodleShadow';
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #000;
  }
  input{
    font-family: 'RubikDoodleShadow';
    font-weight: bold;
  letter-spacing: 1.5px;

  }
`;

export default GlobalFonts;
