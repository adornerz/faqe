import React from 'react'
import { FooterContainer, CopyrightText, InstagramContainer } from './FooterComponents'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterContainer>
        <CopyrightText>
            Faqe.al. All Rights Reserved &copy;
        <InstagramContainer>
            <AiOutlineInstagram style={{fontSize: '24px'}}/> Instagram
        </InstagramContainer>
        </CopyrightText>
    </FooterContainer>
  )
}

export default Footer