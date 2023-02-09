import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
  --ff-family: 'Roboto', sans-serif;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  
    width: 100vw;

    -webkit-font-smoothing: antialised;
  }

  button, a{
    cursor: pointer;
    transition: 0,2ms;
    text-decoration: none;

  }
  button:hover, a:hover{
    filter:brightness(0.8)
  }

  body, input, button, textarea{
    font-family: var(--ff-family);
    font-size: 16px;
    outline: none;
    ;
  }


`
