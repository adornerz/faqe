import React from 'react'
import { Button } from '../../Buttons'
import { Heading, UpperText, Paragraph } from '../../Texts'
import { ContactContainer, ContactForm, FormElem, FormHeading, FormInput, InstagramLink } from './ContactComponents'
import { Fade } from 'react-reveal'
const ContactSection = () => {
    return (
        <ContactContainer id='contact'>
            <Fade>
                <UpperText color='#b8c1ec'>
                    Kontakt
                </UpperText>
                <Heading color='#fffffe'>
                    Le të përmirësojmë biznesin tuaj, së bashku!
                </Heading>
            </Fade>
            <Paragraph>
                Mund të plotësoni të dhënat më poshtë dhe ne do t'ju kontaktojmë sa më shpejt të jetë e mundur, ose na kontaktoni në <InstagramLink href="https://instagram.com/faqe.official" target="_blank">instagram: faqe.official </InstagramLink>
            </Paragraph>
            <ContactForm>
                    <FormElem>
                        <FormHeading> Emri Juaj </FormHeading>
                        <FormInput placeholder="Emri Juaj" />
                    </FormElem>

                    <FormElem>
                        <FormHeading> Emri i Biznesit Tuaj </FormHeading>
                        <FormInput placeholder="Emri i Biznesit Tuaj" />
                    </FormElem>

                    <FormElem>
                        <FormHeading> Nr. i Telefonit </FormHeading>
                        <FormInput placeholder="06XXXXXXX" />
                    </FormElem>

                    <FormElem>
                        <FormHeading> E-Maili (Opsional) </FormHeading>
                        <FormInput placeholder="abc@xyz.com" />
                    </FormElem>
                    <Button style={{ width: '100%' }}> Kontakto! </Button>
            </ContactForm>
        </ContactContainer>
    )
}

export default ContactSection