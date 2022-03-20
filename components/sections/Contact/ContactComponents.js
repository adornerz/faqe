import styled from 'styled-components'

export const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #232946;
    padding: 20px 10px;
`

export const ContactForm = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormElem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 14px 0;
`

export const FormHeading = styled.h1`
    color: #b8c1ec;
    font-size: 14px;
    padding-bottom: 2px;
    margin-bottom: 0;
`

export const FormInput = styled.input`
    font-size: 16px;
    padding: 4px 8px;
    border: none;
    border-bottom: 3px solid #fffffe;
    background: transparent;
    color: #fffffe;
    outline-width: 0;
    font-family: 'Roboto', sans-serif;
`

export const InstagramLink = styled.a`
    color: #fffffe;
    border-bottom: 1px solid lightblue;
`