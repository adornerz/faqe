import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from './NavbarElements'
import Link from 'next/link'
import data from './navbar.data'
import Image from 'next/image'
import { NavButton } from '../Buttons'
import Shake from 'react-reveal/Shake'
const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Link href='/' passHref>
                        <NavLogo>
                            <Image src="/logo.png" width={150} height={55} alt=""/>
                        </NavLogo>
                    </Link>
                    <MobileIcon >
                        <FaBars onClick={() => props.toggle()} />
                    </MobileIcon>
                    <NavMenu>
                        {
                            data.map(({ text, to }, i) => (
                                <NavItem key={i}>
                                    <NavLink to={to} smooth={true} duration={500} spy={true} exact="true" offset={-80}> {text} </NavLink>
                                </NavItem>
                            ))
                        }
                        <Shake>
                            <NavItem>
                                <NavLink to='contact' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                    <NavButton>
                                        Kontakto
                                    </NavButton>
                                </NavLink>
                            </NavItem>
                        </Shake>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar