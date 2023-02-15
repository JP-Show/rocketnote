import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 10rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }
    button {
      background: none;
      border: none;
    }
  }
`
export const Form = styled.form`
  max-width: 21rem;
  margin: -6rem auto 0;
`
export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;

  width: 11.5rem;
  height: 11.5rem;

  > img {
    width: 11.5rem;
    height: 11.5rem;

    border-radius: 50%;
  }
  > label {
    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }
  }
`
