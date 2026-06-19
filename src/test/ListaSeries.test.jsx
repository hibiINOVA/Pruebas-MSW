import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import ListaSeries from '../components/ListaSeries'

describe('ListaSeries', () => {
  it('debería cargar todas las imágenes de las series', async () => {
    render(<ListaSeries />)

    const images = await screen.findAllByRole('img')
    expect(images).toHaveLength(15)
  })

  it('debería de mostrar 15 títulos de series', async () => {
    render(<ListaSeries />)

    const titles = await screen.findAllByRole('heading', { level: 2 })
    expect(titles).toHaveLength(15)
  })

  it('debería de encontrar el título "Stranger Things"', async () => {
    render(<ListaSeries />)

    const title = await screen.findByText('Stranger Things')
    expect(title).toBeInTheDocument()
  })

  it('debería de encontrar el creador "Frank Darabont, Angela Kang"', async () => {
    render(<ListaSeries />)

    const creator = await screen.findByText(/Frank Darabont, Angela Kang/)
    expect(creator).toBeInTheDocument()
  })

  it('debería de encontrar la puntuación "9.2"', async () => {
    render(<ListaSeries />)

    const rating = await screen.findByText(/9\.2/)
    expect(rating).toBeInTheDocument()
  })

  it('debería de encontrar el canal "Prime Video"', async () => {
    render(<ListaSeries />)

    const channel = await screen.findByText(/Prime Video/)
    expect(channel).toBeInTheDocument()
  })
})
