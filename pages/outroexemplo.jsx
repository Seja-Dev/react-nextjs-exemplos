import Header from '../src/components/header/Header'
import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'

function ExemploPage () {
  return (
    <Header
      image="./coffee2.jpg"
    >
      <Title>Outro Café Dev</Title>
      <Subtitle text="Grãos ainda mais selecionados para programadores." />
    </Header>
  )
}

export default ExemploPage