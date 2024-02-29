import { fetchFact } from '../services/fact'
import { useEffect, useState } from 'react'

export function useCatFact ({ setFirstWord, onClickFact }) {
  const [fact, setFact] = useState('')

  const getFact = () => {
    fetchFact().then((fact) => {
      setFact(fact)
      setFirstWord(fact.split(' ')[0])
    })
  }

  useEffect(getFact, [onClickFact])

  return { fact, getFact }
}
