import { CatImage } from './src/components/CatImage'
import { Fact } from './src/components/Fact'
import { useState } from 'react'

export function App () {
  const [firstWord, setFirstWord] = useState('')
  const [onClickFact, setOnClickFact] = useState()

  const renderFact = () => {
    setOnClickFact(!onClickFact)
  }

  return (
    <>
      <main>
        <h1>Hi Cats</h1>
        <Fact setFirstWord={setFirstWord} onClickFact={onClickFact} />
        <CatImage word={firstWord} />
        <button onClick={renderFact}>Refresh</button>
      </main>
    </>
  )
}
