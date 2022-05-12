/* eslint-disable max-len */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('1. Teste o componente <About.js />', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const about = screen.getByRole('heading', { name: /about pokédex/i });
    expect(about).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const paragraph1 = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all/i,
    );
    expect(paragraph1).toBeInTheDocument();

    const paragraph2 = screen.getByText(
      /one can filter pokémons by type, and see more details for each one of them/i,
    );
    expect(paragraph2).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);

    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image).toHaveAttribute(
      'src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
