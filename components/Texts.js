import styled from 'styled-components'

export const Heading = styled.h1`
    font-size: 36px;
    padding-bottom: 0px;
    text-align: center;
    color: ${props => props.color};
    margin-top: 0;
`

export const UpperText = styled.h1`
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
    color: ${props => props.color};
`

export const Paragraph = styled.p`
    color: #b8c1ec;
    font-size: 18px;
    text-align: center;
    margin: 0;
    padding: 10px 0;
`