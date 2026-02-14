'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'Preise', href: '/preise' },
  { name: 'Technologie', href: '/technologie' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Bewertungen', href: '/bewertungen' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 lg:px-8 lg:py-2">
          {/* Logo */}
          <div className="flex lg:flex-1 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 lg:gap-3">
              <img src="/images/logo-removebg-preview.png" alt="Demon (And) Angel Logo" className="h-12 sm:h-16 lg:h-24 w-auto" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">Demon (And) Angel</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden relative z-[10001] p-2 text-white flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="tel:+4915238228127" className="btn-primary text-base flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Termin buchen
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[10000] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95"
          onClick={closeMenu}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-black via-demon-900/50 to-black border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-6 px-6">
            <nav className="flex-1 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-4 px-5 text-xl font-medium text-white hover:bg-white/10 rounded-xl transition-all hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="pt-6 border-t border-white/10 space-y-4">
              <a
                href="tel:+4915238228127"
                onClick={closeMenu}
                className="btn-primary block text-center py-5 text-lg"
              >
                <Phone className="h-6 w-6 inline mr-2" />
                Termin buchen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
