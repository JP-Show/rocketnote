import { Container, Links, Content } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title={'Excluir nota'} />
          <h1>Introduction NodeJS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            illum saepe rem est possimus quidem! Itaque illo cupiditate ab
            expedita, tempora nihil accusantium asperiores. Laborum nihil eos
            molestiae deleniti tempora?
          </p>

          <Section title={'Links úteis'}>
            <Links>
              <li>
                <a href="#"> Link 1</a>
              </li>
              <li>
                <a href="#"> Link 1</a>
              </li>
              <li>
                <a href="#"> Link 1</a>
              </li>
            </Links>
          </Section>
          <Section title={'Tags'}>
            <Tag title={'NodeJs'} />
            <Tag title={'Express'} />
          </Section>
          <Button title="voltar" />
        </Content>
      </main>
    </Container>
  )
}
