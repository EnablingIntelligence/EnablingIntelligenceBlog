import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`/ EnablingIntelligenceBlog${src}`} {...rest} />
)

export default Image
