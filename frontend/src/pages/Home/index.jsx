import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './style'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Notes } from '../../components/Notes'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title={'Todos'} isActive></ButtonText>
        </li>
        <li>
          <ButtonText title={'React'}></ButtonText>
        </li>
        <li>
          <ButtonText title={'NodeJS'}></ButtonText>
        </li>
      </Menu>
      <Search>
        <Input icon={FiSearch} placeholder="Search by title"></Input>
      </Search>
      <Content>
        <Section title="My notes">
          <Notes
            data={{ title: 'React', tags: [{ id: '1', name: 'NodeJS' }] }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        New Note
      </NewNote>
    </Container>
  )
}
