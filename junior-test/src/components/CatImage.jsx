import { useCatImage } from '../hooks/useCatImage'

export function CatImage ({ word }) {
  const { image } = useCatImage({ word })

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
