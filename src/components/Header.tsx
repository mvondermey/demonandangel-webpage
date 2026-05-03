'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'

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
      <header className="fixed w-full z-50 border-b border-sky-200/80 bg-[rgba(221,236,255,0.84)] shadow-sm shadow-sky-200/70 backdrop-blur-xl">
        <div className="hidden border-b border-sky-200/70 bg-white/55 2xl:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-sm text-slate-700">
            <div className="flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-500" />
                Europa-Allee 41-43, Frankfurt
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-purple-500" />
                Täglich 09:00 - 20:00
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/preise" className="page-support-link">
                Preise ab 29 EUR
              </Link>
              <Link href="/bewertungen" className="page-support-link">
                5.0 Google Bewertungen
              </Link>
            </div>
          </div>
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-6 2xl:px-8 2xl:py-3">
          {/* Logo */}
          <div className="flex min-w-0 flex-shrink-0 lg:flex-1">
            <Link
              href="/"
              className="flex min-w-0 items-center"
              aria-label="Demon (And) Angel - Startseite"
              title="Demon (And) Angel"
            >
              <img
                src="/images/logo-removebg-preview.png"
                alt="Demon (And) Angel - Laser Haarentfernung Frankfurt Logo"
                className="h-11 w-auto sm:h-14 2xl:h-16"
                loading="eager"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="2xl:hidden relative z-[10001] p-2 text-slate-800 flex-shrink-0"
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
          <div className="hidden flex-1 justify-center 2xl:flex 2xl:gap-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white/65 hover:text-slate-950 2xl:text-[15px]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 2xl:flex 2xl:flex-1 2xl:justify-end">
            <a href="https://wa.me/4915238228127" className="btn-secondary inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2 text-base">
              <Phone className="h-5 w-5" />
              Termin buchen
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`2xl:hidden fixed inset-0 z-[10000] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-l border-sky-200 shadow-2xl transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col px-6 pb-6 pt-24">
            <div className="mb-6 rounded-2xl border border-sky-200 bg-white/80 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Demon (And) Angel Frankfurt</p>
              <p className="mt-1">Europa-Allee 41-43 · Täglich 09:00 - 20:00</p>
            </div>
            <nav className="flex-1 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-4 px-5 text-xl font-medium text-slate-800 hover:bg-white rounded-xl transition-all hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="space-y-4 border-t border-sky-200 pt-6">
              <a
                href="https://wa.me/4915238228127"
                onClick={closeMenu}
                className="btn-secondary block text-center py-5 text-lg"
              >
                <MessageCircle className="mr-2 inline h-6 w-6" />
                WhatsApp schreiben
              </a>
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
