import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 3.5rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: 0;
  padding: 0 1rem;

  margin: 1rem 0;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
