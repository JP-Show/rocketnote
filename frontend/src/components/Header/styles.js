import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  height: 6.5rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 9px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  strong {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const Logout = styled.div`
  display: flex;
  border: none;
  background: none;
  align-items: center;

  > SVG {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
  }
`
