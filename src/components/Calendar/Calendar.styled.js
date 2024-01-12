import styled from 'styled-components';
import { gradientBackground, loadingAnimation } from '../../styles/animations';

export const StyledCalendar = styled.section`
  display: flex;
  margin: 5rem auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  font-size: 16px;
  width: 50vw;
  border-radius: 6px;
  background: linear-gradient(45deg, #bbd3f0, #95d4e1);
  box-shadow: inset 6px 6px 10px #a0b1c3, inset -6px -6px 10px #d0e4ff;
  background-size: 400% 400%;
  animation: ${gradientBackground} 15s ease infinite;
`;

export const StyledLoading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: ${loadingAnimation} 1.2s linear infinite;
  }
`;
