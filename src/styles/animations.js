import { keyframes } from 'styled-components';

export const loadingAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const buttonAnimation = keyframes`
  0% {
    transform: scale(0.7, 1.3);
  }

  25% {
    transform: scale(1.3, 0.7);
  }

  50% {
    transform: scale(0.7, 1.3);
  }

  75% {
    transform: scale(1.3, 0.7);
  }

  100% {
    transform: scale(1, 1);
  }
`;
