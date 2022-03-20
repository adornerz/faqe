import styled from 'styled-components'

export const BenefitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FA7268;
    padding: 20px 10px;
`

export const Benefits = styled.div`
    width: 90%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Benefit = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: #272838;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.4px);
    -webkit-backdrop-filter: blur(2.4px);
`

export const BenefitHeading = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    margin: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`