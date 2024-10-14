'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import menuIcon from '../assets/images/gear-icon.svg'
import headerImage from'../assets/images/z-logo.svg'

const sections = [
  { title: 'Home', url: '/' },
  { title: 'International Travel', url: '/section/international-travel' },
  { title: 'Local Travel', url: '/section/local-travel' },
  { title: 'Humanitarian Worker', url: '/section/humanitarian' },
  { title: 'Religion', url: '/section/religion' },
  { title: 'About Me', url: '/section/about' },
]
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className='ml-8 mt-8'>
      <nav className='flex gap-8'>
        <Link href="/"><Image className='w-10' src={headerImage} alt='letter z' /></Link>
        <ul className='flex gap-8'>
          {sections.map((section) => (
            <li key={section.url}>
              <Link href={section.url}>{section.title}</Link>
            </li>
          ))}
        </ul>

        <button onClick={toggleMenu} aria-expanded={showMenu}>
          <Image className='w-6' src={menuIcon} alt="menu" />
        </button>
      </nav>
    </header>
  )
}

export default Header