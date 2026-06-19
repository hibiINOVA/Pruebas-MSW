import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Formulario from '../components/Formulario'
import userEvent from '@testing-library/user-event' 

describe('Lista serias', () => {
    it('Deberia de crear una nueva serie', async () => {
        render(<Formulario />)
        
        const user = userEvent.setup();
        const title = screen.getByLabelText('Título')
        const creator = screen.getByLabelText('Creador')
        const rating = screen.getByLabelText('Rating')
        const dates = screen.getByLabelText('Fechas')
        const image = screen.getByLabelText('Imagen')
        const channel = screen.getByLabelText('Canal')
        
        await user.type(title, 'Malcom');
        await user.type(creator, 'Nobody');
        await user.type(rating, '9.0');
        await user.type(dates, '2001-2005');
        await user.type(image, 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg');
        await user.type(channel, 'Fox');

        await user.click(screen.getByRole('button', { name: /Crear serie/i }))

        
        const alertElement = await screen.findByRole('alert');
        expect(alertElement).toBeDefined();
    })
})