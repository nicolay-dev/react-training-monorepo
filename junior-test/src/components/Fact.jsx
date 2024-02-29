import { useState, useEffect } from 'react'

export function Fact ({ setFirstWord, onClickFact }) {
  const FACT_API = 'https://catfact.ninja/fact'
  const [fact, setFact] = useState('')

  const fetchFact = async () => {
    const response = await fetch(FACT_API)
    const data = response ? await response.json() : undefined // TODO: Manage Error here
    if (data.fact) {
      setFact(data.fact)
      setFirstWord(data.fact.split(' ')[0])
    }
  }

  const getFact = () => {
    fetchFact()
  }

  useEffect(getFact, [onClickFact])

  return (
    <>
      <p>{fact}</p>
    </>
  )
}
