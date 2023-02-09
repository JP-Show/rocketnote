import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.5rem auto;
  grid-template-areas:
    'header'
    'content';
  > main {
    grid-area: content;
    overflow-y: auto;
  }
  .tag {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 2rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;
    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
