'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import menuIcon from '../../assets/images/hamburger-icon.svg'
import headerImage from '../../assets/images/Zora.png'
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
    <header className="flex gap-4 mb-6 items-start justify-between base-margin">
      <Link href="/">
        {/* <Image className="w-36 h-16 object-cover" src={headerImage} alt="Header image" /> */}
        <h1 className="mb-8">
          <span className="font-eyesome text-5xl block text-blue">Zora's </span>
          <span className="font-cinzel  text-3xl block pl-10">Blog</span>
        </h1>
      </Link>
      {/* <h1 className="text-2xl xs:inline hidden">Zoras Travels</h1> */}
      <button onClick={toggleMenu} aria-expanded={showMenu}>
        <Image className="w-6" src={menuIcon} alt="menu" />
      </button>

      {showMenu && categories.length > 0 ? <MobileMenu categories={categories} /> : null}
    </header>
  )
}

export default Header
