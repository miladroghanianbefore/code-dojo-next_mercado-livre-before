import React from 'react'

import Header from '../components/Header'

import Card from '../components/Card'

export default function Home(): JSX.Element {
  return (
    <div>
      <Header title="Texto"></Header>
      <Card title="https://a-static.mlcdn.com.br/618x463/computador-skill-completo-intel-10a-geracao-core-i5-10400-monitor-21-5-8gb-ddr4-ssd-240gb/skill/42655/498ed351252bc9d70555f9950dba5439.jpg">
        Computador Skill Completo Intel 10ª Geração Core i5 10400, Monitor 21.5”, 8GB DDR4
      </Card>
    </div>
  )
}
