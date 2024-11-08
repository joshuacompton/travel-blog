'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import useWindowWidth from '@/hooks/useWindowWidth'
import Image from 'next/image'
import menuIcon from '../../assets/images/hamburger-icon.svg'
import { usePathname } from 'next/navigation'

const widthBreakPoint = 768

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [categories, setCategories] = useState([])
  const windowWidth = useWindowWidth()
  const onHomePage = usePathname() === '/'

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('/api/categories')
      if (!resp.ok) {
        // figure out how to handle error
        throw new Error('header categories fetch failed')
      }
      const data = await resp.json()
      setCategories(data?.docs)
    }
    fetchData()
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  if (windowWidth > widthBreakPoint) {
    return (
      <div className="w-full">
        <header className="flex py-6 items-start justify-around base-margin">
          <Link href="/">
            <h1>
              <span className="font-eyesome text-5xl block text-blue">Zora's </span>
              <span className="font-cinzel  text-3xl block pl-10">Blog</span>
            </h1>
          </Link>

          {!onHomePage ? (
            <nav className="w-full">
              <ul className="flex flex-wrap gap-9 h-20 justify-center">
                {categories.map(category => (
                  <li className="mt-auto" key={category.id}>
                    <Link href={`/${category.slug}`}>{category.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </header>
      </div>
    )
  } else {
    return (
      <div className="sticky z-10 bg-background top-0 w-full">
        <header className="flex gap-8 py-6 items-start justify-between base-margin">
          <Link href="/">
            <h1>
              <span className="font-eyesome text-5xl block text-blue">Zora's </span>
              <span className="font-cinzel  text-3xl block pl-10">Blog</span>
            </h1>
          </Link>

          <div>
            <button onClick={toggleMenu} aria-expanded={showMenu}>
              <Image className="w-6" src={menuIcon} alt="menu" />
            </button>
          </div>
        </header>
        {showMenu ? (
          <nav>
            <ul className="relative">
              {categories.map(category => (
                <li key={category.id}>
                  <Link href={`/${category.slug}`}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    )
  }
}
