import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkInfo } from '../types'
import { NavLogo } from './Navbar/Navbar'
import { SocialIcons } from '../Components/SocialIcons'

function FooterLink({ navLink, active, setActive }: { navLink: LinkInfo, active: string, setActive: (active: string) => void }) {
    return (
        <li onClick={() => { setActive(navLink.title) }}>
            <Link to={navLink.url}>{navLink.title}</Link> {active === navLink.title ? <hr /> : <></>}
        </li>
    )
}
export const Footer = () => {

    const [active, setActive] = useState("Shop");

    const links: LinkInfo[] = [
        { title: "Shop", url: "/" },
        { title: "Returns", url: "/returns" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
    ]


  return (
    <div className='footer w-full p-1'>
        <div className="footer-components flex flex-row flex-wrap m-5 justify-around">

        <NavLogo />    

        <ul className='nav-menu flex flex-row flex-wrap  gap-10 m-auto p-5'>
            { links.map( link => <FooterLink navLink={link} active={active} setActive={setActive} /> ) }
        </ul>

        <SocialIcons />
        </div>
        <hr className='bg-gray-300 h-1 m-5' />
        <div className="copyright my-12">
            <p>Foldy Friends Inc. 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}