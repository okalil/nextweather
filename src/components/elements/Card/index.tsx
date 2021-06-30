import React, { HTMLAttributes } from 'react'
import { Container } from './styles'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card(props: CardProps) {
  return <Container {...props} />
}
