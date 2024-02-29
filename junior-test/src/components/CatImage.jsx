import { useEffect, useState } from 'react'

export function CatImage ({ word }) {
  const [image, setImage] = useState('')
  const API_URL = 'https://cataas.com/cat/says'

  const updateImage = () => {
    if (!word) return
    console.log(word)
    setImage(`${API_URL}/${word}`)
  }

  useEffect(updateImage, [word])

  return (
    <>
      <img
        src={image} alt={`The image of a cat saying ${word}`} style={{
          width: '500px',
          height: 'auto'
        }}
      />
    </>
  )
}
