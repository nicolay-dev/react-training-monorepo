import { useCatFact } from '../hooks/useCatFact'

export function Fact ({ setFirstWord, onClickFact }) {
  const { fact } = useCatFact({ setFirstWord, onClickFact })

  return (
    <>
      <p>{fact}</p>
    </>
  )
}
