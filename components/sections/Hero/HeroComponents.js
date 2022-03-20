import styled from 'styled-components'

export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 50px 0;
    background-color: #232946;
`

export const HeroWrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Header = styled.h1`
    color: #fffffe;
    font-size: 48px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 0;
    text-transform: uppercase;
`
export const HeroP = styled.p`
    color: #b8c1ec;
    font-size: 18px;
    text-align: left;
`
export const Divider = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
`
export const DividerSvg = styled.svg`
    position: relative;
    display: block;
    width: calc(116% + 1.3px);
    height: 132px;
`
export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;
`