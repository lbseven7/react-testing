import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import App from './App.test';

describe('1. Teste o componente <About.js />', () => {
  test(() => {
    renderWithRouter(<App />);

    // const pokedex = screen
    //   .getByRole('heading', { level: 1, name: 'Pokédex' });
    // expect(pokedex).toBeInTheDocument();

    const about = screen
      .getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(about).toBeInTheDocument();

    const imgPokedex = screen.getByAltText('img', { name: /Pokédex/i });
    expect(imgPokedex).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();

    // const imgPokedex = screen.getByRole('img');
    // expect(imgPokedex).toHaveAttribute('alt', 'Pokédex');
    // expect(imgPokedex).toHaveAttribute('src', '/imgPokedex');
  });
});
//     expect(imgPokedex).toHaveAttribute('alt', 'imgPokedex');
