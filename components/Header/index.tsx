import React from 'react'

import { Container, Flex, Text, Box, Input } from '@chakra-ui/react'
import { Header, MapPin } from './styles'

import Image from 'next/image'

interface PageHeaderProps {
  title: string
  description?: string
}

const HeaderComponent: React.FC<PageHeaderProps> = () => {
  return (
    <Header>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between">
          <Flex flexDirection="column" alignItems="flex-start">
            <Box mb="14px" h="24px">
              <Image src="/images/before-logo.svg" width={62} height={24} />
            </Box>

            <Flex alignItems="center">
              <MapPin color="white" size={20} border="1.6px" m="0px" />

              <Flex flexDirection="column">
                <Text color="white" fontWeight="semibold" fontSize="12px">
                  Informe seu
                </Text>
                <Text color="white" fontWeight="extrabold" fontSize="12px">
                  CEP
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDirection="column">
            <Input placeholder="Buscar produtos, marcas e muito mais..." />

            <Flex>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Categorias
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Ofertas do Dia
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Histórico
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Supermercado
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Lojas Oficiai
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Vender
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Contato
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection="column">
            <Text color="white" fontWeight="semibold" fontSize="12px">
              Vacinação contra Covid-19
            </Text>

            <Flex>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Crie sua conta
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Entre
              </Text>
              <Text color="white" fontWeight="semibold" fontSize="12px">
                Compra
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Header>
  )
}

export default HeaderComponent
