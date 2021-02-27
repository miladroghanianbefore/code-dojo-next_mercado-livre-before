import React from 'react'

import { ProductImage, OfferCard, Container } from './styles'

interface PageCardProps {
  title: string
}

const CardComponent: React.FC<PageCardProps> = (props) => {
  return (
    <Container>
      <ProductImage>
        <img src={props.title} alt="Produto" />
      </ProductImage>
      <OfferCard>{props.children}</OfferCard>
    </Container>
  )
}

export default CardComponent
