import Head from 'next/head'

import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'

function HomePage () {
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
      </div>
    </>
  )
}

export default HomePage