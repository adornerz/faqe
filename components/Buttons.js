import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    padding: 10px 20px;
    background-color: ${props => props.secondary ? '#72757e' : '#7f5af0'};
    color: #fffffe;
    border-radius: 20px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin: 0 10px;
    transition: all .3s;
    text-align: center;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #fffffe;
        color: ${props => props.secondary ? '#72757e' : '#7f5af0'};
    }

    @media screen and (max-width: 50em){
        font-size: 16px;
    }
`
export const NavButton = styled.button`
    padding: 10px 20px;
    background-color: ${props => props.secondary ? '#72757e' : '#7f5af0'};
    color: #fffffe;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin: 0 10px;
    transition: all .3s;
    &:hover {
        background-color: #fffffe;
        color: ${props => props.secondary ? '#72757e' : '#7f5af0'};
    }

`