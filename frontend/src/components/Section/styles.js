import styled from 'styled-components'

export const Container = styled.div`
  margin: 3.5rem 0 1.5rem;
  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1rem;
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`
