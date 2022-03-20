import React from 'react'
import {
  HeroContainer,
  HeroWrapper,
  Header,
  HeroP,
  BtnWrapper,
} from './HeroComponents'
import { Button } from '../../Buttons'

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroWrapper>
        <Header>
          Faqe.al - Ndërtojmë eksperienca.
        </Header>
        <HeroP>
          Çdo biznesi i duhet një webpage, dhe për biznesin tuaj e mundësojmë ne.
        </HeroP>
        <BtnWrapper>
          <Button to='benefits' smooth={true} duration={500} spy={true} exact="true" offset={-80}> Mëso më shumë </Button>
          <Button to='contact' smooth={true} duration={500} spy={true} exact="true" offset={-80}> Kontakto </Button>
        </BtnWrapper>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default HeroSection