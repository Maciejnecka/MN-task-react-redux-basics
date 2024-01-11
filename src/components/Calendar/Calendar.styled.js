import styled from 'styled-components';
import { loadingAnimation } from '../../styles/animations';

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
  background: #fff;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;

export const StyledLoading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    margin: auto;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: ${loadingAnimation} 1.2s linear infinite;
  }
`;
