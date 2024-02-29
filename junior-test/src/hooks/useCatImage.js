import { useState, useEffect } from 'react'

const API_URL = 'https://cataas.com/cat/says'

export function useCatImage ({ word }) {
  const [image, setImage] = useState('')

  const updateImage = () => {
    if (!word) return
    console.log(word)
    setImage(`${API_URL}/${word}`)
  }

  useEffect(updateImage, [word])

  return { image }
}
