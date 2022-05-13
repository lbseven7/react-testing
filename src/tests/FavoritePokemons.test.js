import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('1. Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const favorite = screen.getByText(/No favorite pokemon found/i);
    expect(favorite).toBeInTheDocument();
  });

  test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<FavoritePokemons />);

    // const favorites = container.querySelector('#root > div > div > div > div > div');
    // expect(favorites).toBeInTheDocument();
  });
});
