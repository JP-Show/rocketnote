import { Container } from './styles'

export function Button({ title, loding = false, ...rest }) {
  return (
    <Container {...rest} type="button" disabled={loding}>
      {loding ? 'carregando...' : title}
    </Container>
  )
}
