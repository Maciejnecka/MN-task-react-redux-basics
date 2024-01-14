import { css } from 'styled-components';

const breakpoints = {
  small: '600px',
  medium: '850px',
  large: '1200px',
};

export const media = {
  small: (...args) => css`
    @media (max-width: ${breakpoints.small}) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: ${breakpoints.medium}) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (max-width: ${breakpoints.large}) {
      ${css(...args)}
    }
  `,
};
