import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Simple test to verify the homepage renders correctly
describe('Homepage', () => {
  it('renders the main headline from original website', () => {
    render(<Home />)
    expect(screen.getByText(/Versuche mal eine dauerhafte Haarentfernung mit Laser/i)).toBeInTheDocument()
  })

  it('renders the "Total schmerzfrei" tagline', () => {
    render(<Home />)
    expect(screen.getByText(/Total schmerzfrei/i)).toBeInTheDocument()
  })

  it('renders all benefit points from original website', () => {
    render(<Home />)
    expect(screen.getByText(/Völlig SCHMERZFREI/i)).toBeInTheDocument()
    expect(screen.getByText(/Keine Verbrennungsgefahr/i)).toBeInTheDocument()
    expect(screen.getByText(/Kürzere Behandlungszeit/i)).toBeInTheDocument()
    expect(screen.getByText(/Alle Haarfarben/i)).toBeInTheDocument()
  })

  it('renders the gallery section', () => {
    render(<Home />)
    expect(screen.getByText(/Fotogalerie/i)).toBeInTheDocument()
  })

  it('renders pricing link', () => {
    render(<Home />)
    expect(screen.getByText(/Preise ansehen/i)).toBeInTheDocument()
  })
})
