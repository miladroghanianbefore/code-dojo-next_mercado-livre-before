import styled from 'styled-components'
import NextLink from 'next/link'
import { MapPin as MapPinFeather } from 'react-feather'

export const Header = styled.header`
  background: linear-gradient(270deg, #ff4000 0%, #cc3200 100%);
  padding: 20px 24px;
`

export const Link = styled(NextLink)``

export const MapPin = styled(MapPinFeather)`
  margin-right: 8px;
`
