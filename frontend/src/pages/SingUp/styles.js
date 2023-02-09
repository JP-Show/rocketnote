import styled from 'styled-components'
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: stretch;
`

export const Form = styled.form`
  padding: 0 9rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 1.5rem;
    margin-top: 5rem;
    margin-bottom: 1.5rem;
  }
  > a {
    margin-top: 8.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.6);
`
