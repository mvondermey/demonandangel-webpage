'use client'

import { MessageCircle } from 'lucide-react'

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/4915238228127"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl transition-all hover:scale-105 group"
      aria-label="WhatsApp Kontakt"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-semibold">💬 Sofort Antwort</span>
    </a>
  )
}
