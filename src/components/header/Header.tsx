'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import menuIcon from '../../assets/images/hamburger-icon.svg'
import headerImage from'../../assets/images/z-logo.svg'
import MobileMenu from './MobileMenu'

// let categories = [
  // { title: 'International Travel', url: '/section/international-travel' },
  // { title: 'Local Travel', url: '/section/local-travel' },
  // { title: 'Humanitarian Worker', url: '/section/humanitarian' },
  // { title: 'Religion', url: '/section/religion' },
// ]
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [categories, setCategories] = useState([])

  // I would love to grab this once with local api in the root layout but noooo, next js cant suppport that.
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('/api/categories')
      if (!resp.ok) {
        // figure out how to handle error
        console.log('sections search failed')
      }
      const data = await resp.json()
      setCategories(data?.docs)
    }
    fetchData()
  }, [])  
  

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className='flex gap-4 m-4 items-start justify-between'>
      <Link href="/"><Image className='w-10' src={headerImage} alt='letter z' /></Link>
      <h1 className="text-2xl">Zoras Travels</h1>
      <button onClick={toggleMenu} aria-expanded={showMenu}>
        <Image className='w-6' src={menuIcon} alt="menu" />
      </button>

      {showMenu && categories.length > 0 ? <MobileMenu sections={categories} /> : null}
    </header>
  )
}

export default Header