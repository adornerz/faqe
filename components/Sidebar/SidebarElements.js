import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 70%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    transition: .2s ease-in-out linear;
    top: 0;
    right: 0;
    transform: 0.3s ease-in-out;
    display: ${props => props.isOpen ? 'block' : 'none'};
    /* visibility: ${props => props.isOpen ? 'hidden' : 'visible'}; */
    background: rgba(35, 41, 70, 0.8);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    margin-top: 40%;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transform: 0.3s ease-in-out;

    &:hover {
        color: #01bf71;
    }
`