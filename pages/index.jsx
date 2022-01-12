import { useState } from 'react'
import Head from 'next/head'

import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'
import Button from '../src/components/button/Button'

function HomePage () {
  const [cliques, setCliques] = useState(0)

  const handleClick = () => {
    setCliques(cliques + 1)
  }

  return (
    <>
      <Head>
        <title>Minha primeira página em React</title>
      </Head>
      <div>
        <Title>Um titulo</Title>
        <Subtitle />
        <Title>Outro titulo</Title>
        <Subtitle text="Outro paragrafo qualquer"></Subtitle>
        <Button onClick={handleClick}>Clique aqui</Button>
        Cliques: {cliques}
      </div>
    </>
  )
}

export default HomePage