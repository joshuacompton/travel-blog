'use client'
import { useState, useEffect } from 'react'

export default function useWindowWidth() {
  const [width, setWidth] = useState(0)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return width
}
