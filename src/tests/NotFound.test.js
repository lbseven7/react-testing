import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('4. Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading h2 com Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);

    const notfound = screen.getByRole(
      'heading',
      { name: /page requested not found/i },
    );
    expect(notfound).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole(
      'img', { name: /pikachu crying because the page requested was not found/i },
    );
    expect(image).toHaveAttribute(
      'src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });

  test('Acessar uma página que não existe', () => {
    renderWithRouter(<NotFound />);
  });
});
